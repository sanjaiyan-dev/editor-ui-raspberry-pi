/* eslint-disable react-hooks/exhaustive-deps */
import './PythonRunner.scss';
import React, { useContext, useEffect, useRef, useState } from 'react';
import * as Sentry from "@sentry/browser";
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sk from "skulpt"
import { setError, codeRunHandled, stopDraw, setSenseHatEnabled, triggerDraw } from '../../EditorSlice'
import ErrorMessage from '../../ErrorMessage/ErrorMessage'

import store from '../../../../app/store'
import VisualOutputPane from './VisualOutputPane';
import OutputViewToggle from './OutputViewToggle';
import { SettingsContext } from '../../../../settings';

const externalLibraries = {
  "./pygal/__init__.js": {
    path: `${process.env.PUBLIC_URL}/shims/pygal/pygal.js`,
    dependencies: [
      'https://cdnjs.cloudflare.com/ajax/libs/highcharts/6.0.2/highcharts.js',
      'https://cdnjs.cloudflare.com/ajax/libs/highcharts/6.0.2/js/highcharts-more.js'
    ],
  },
  "./py5/__init__.js": {
    path: `${process.env.PUBLIC_URL}/shims/processing/py5/py5-shim.js`,
    dependencies: [
      'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.js'
    ]
  },
  "./py5_imported/__init__.js": {
    path: `${process.env.PUBLIC_URL}/shims/processing/py5_imported_mode/py5_imported.js`,
  },
  "./py5_imported_mode.py": {
    path: `${process.env.PUBLIC_URL}/shims/processing/py5_imported_mode/py5_imported_mode.py`
  },
  "./p5/__init__.js": {
    path: `${process.env.PUBLIC_URL}/shims/processing/p5/p5-shim.js`,
    dependencies: [
      'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.js'
    ]
  },
  "./_internal_sense_hat/__init__.js": {
    path: `${process.env.PUBLIC_URL}/shims/sense_hat/_internal_sense_hat.js`
  },
  "./sense_hat.py": {
    path: `${process.env.PUBLIC_URL}/shims/sense_hat/sense_hat_blob.py`
  }
};

const PythonRunner = () => {
  const projectCode = useSelector((state) => state.editor.project.components);
  const isSplitView = useSelector((state) => state.editor.isSplitView);
  const isEmbedded = useSelector((state) => state.editor.isEmbedded);
  const codeRunTriggered = useSelector((state) => state.editor.codeRunTriggered);
  const codeRunStopped = useSelector((state) => state.editor.codeRunStopped);
  const drawTriggered = useSelector((state) => state.editor.drawTriggered);
  const senseHatAlwaysEnabled = useSelector((state) => state.editor.senseHatAlwaysEnabled);
  const output = useRef();
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const settings = useContext(SettingsContext)

  const queryParams = new URLSearchParams(window.location.search)
  const [hasVisualOutput, setHasVisualOutput] = useState(queryParams.get('show_visual_tab') === 'true' || senseHatAlwaysEnabled)

  const getInput = () => {
    const pageInput = document.getElementById("input")
    const webComponentInput = document.querySelector('editor-wc') ? document.querySelector('editor-wc').shadowRoot.getElementById("input") : null;
    return pageInput || webComponentInput
  }

  useEffect(() => {
    if (codeRunTriggered) {
      runCode();
    }
  }, [codeRunTriggered]);

  useEffect(() => {
    if (codeRunStopped && getInput()) {
      const input = getInput()
      input.removeAttribute("id")
      input.removeAttribute("contentEditable")
      dispatch(setError(t('output.errors.interrupted')));
      dispatch(codeRunHandled())
    }
  }, [codeRunStopped]);

  useEffect(() => {
    if (!codeRunTriggered && !drawTriggered) {
      if (getInput()) {
        const input = getInput()
        input.removeAttribute("id")
        input.removeAttribute("contentEditable")
      }
    }
  },
  [drawTriggered, codeRunTriggered]
  )

  const visualLibraries =[
    "./pygal/__init__.js",
    "./py5/__init__.js",
    "./py5_imported/__init__.js",
    "./p5/__init__.js",
    "./_internal_sense_hat/__init__.js",
    "src/builtin/turtle/__init__.js"
  ]

  const outf = (text) => {
    if (text !== "") {
      const node = output.current;
      const div = document.createElement("span")
      div.classList.add('pythonrunner-console-output-line')
      div.innerHTML = new Option(text).innerHTML;
      node.appendChild(div);
      node.scrollTop = node.scrollHeight;
    }
  }

  const builtinRead = (x) => {

    if (x==="./_internal_sense_hat/__init__.js") {
      dispatch(setSenseHatEnabled(true))
    }

    if(x === "./p5/__init__.js" || x === "./py5/__init__.js") {
      dispatch(triggerDraw())
    }
    
    // TODO: Handle pre-importing py5_imported when refactored py5 shim imported

    if (visualLibraries.includes(x)) {
      setHasVisualOutput(true)
    }

    let localProjectFiles = projectCode.filter((component) => component.name !== 'main').map((component) => `./${component.name}.py`);

    if (localProjectFiles.includes(x)) {
      let filename = x.slice(2, -3);
      let component = projectCode.find((x) => x.name === filename);
      if (component) {
        return component.content;
      }
    }

    if (Sk.builtinFiles !== undefined && Sk.builtinFiles["files"][x] !== undefined) {
      return Sk.builtinFiles["files"][x];
    }

    if (externalLibraries[x]) {
      var externalLibraryInfo = externalLibraries[x];

      return externalLibraries[x].code || Sk.misceval.promiseToSuspension(
        fetch(externalLibraryInfo.path).then((response) => response.text()).then((code) => {
          if (!code) {
            throw new Sk.builtin.ImportError("Failed to load remote module");
          }
          externalLibraries[x].code = code
          var promise;

          function mapUrlToPromise(path) {
            // If the script is already in the DOM don't add it again.
            const existingScriptElement = document.querySelector(`script[src="${path}"]`)
            if(!existingScriptElement) {
              return new Promise(function (resolve, _reject) {
                let scriptElement = document.createElement("script");
                scriptElement.type = "text/javascript";
                scriptElement.src = path;
                scriptElement.async = true
                scriptElement.onload = function () {
                  resolve(true);
                }

                document.body.appendChild(scriptElement);
              });
            }
          }
          if (externalLibraryInfo.loadDepsSynchronously) {
            promise = (externalLibraryInfo.dependencies || []).reduce((p, url) => {
              return p.then(() => mapUrlToPromise(url));
            }, Promise.resolve()); // initial
          } else {
            promise = Promise.all((externalLibraryInfo.dependencies || []).map(mapUrlToPromise));
          }

          return promise.then(function () {
            return code;
          }).catch(function () {
            throw new Sk.builtin.ImportError("Failed to load dependencies required");
          });
        })
      );
    }

    throw new Error("File not found: '" + x + "'");
  }

  const inputSpan = () => {
    const span = document.createElement("span");
    span.setAttribute("id", "input");
    span.setAttribute("spellCheck", "false");
    span.setAttribute("class", "pythonrunner-input");
    span.setAttribute("contentEditable", "true");
    return span
  }

  const inf = function () {
    if (Sk.sense_hat) {
      Sk.sense_hat.mz_criteria.noInputEvents = false
    }
    const outputPane = output.current;
    outputPane.appendChild(inputSpan());

    const input = getInput()
    input.focus();

    return new Promise(function (resolve, reject) {
      input.addEventListener("keydown", function removeInput(e) {
        if (e.key === "Enter") {
          input.removeEventListener(e.type, removeInput)
          // resolve the promise with the value of the input field
          const answer = input.innerText;
          input.removeAttribute("id");
          input.removeAttribute("contentEditable");
          input.innerText=answer+'\n';

          document.addEventListener("keyup", function storeInput(e) {
            if (e.key === "Enter") {
              document.removeEventListener(e.type, storeInput);
              resolve(answer);
            }
          })
        }
      })
    })
  }

  const handleError = (err) => {
    let errorMessage
    if (err.message === t('output.errors.interrupted')) {
      errorMessage = err.message
    } else {
      const errorDetails = (err.tp$str && err.tp$str().v).replace(/\[(.*?)\]/, "").replace(/\.$/, '')
      const errorType = err.tp$name || err.constructor.name
      const lineNumber = err.traceback[0].lineno
      const fileName = err.traceback[0].filename.replace(/^\.\//, '')

      Sentry.captureMessage(`${errorType}: ${errorDetails}`)
      errorMessage = `${errorType}: ${errorDetails} on line ${lineNumber} of ${fileName}`;
    }

    dispatch(setError(errorMessage));
    dispatch(stopDraw());
    if (getInput()) {
      const input = getInput()
      input.removeAttribute("id")
      input.removeAttribute("contentEditable")
    }
  }

  const runCode = () => {
    // clear previous output
    dispatch(setError(""));
    output.current.innerHTML = '';
    dispatch(setSenseHatEnabled(false))

    var prog = projectCode[0].content;

    if (prog.includes(`# ${t('input.comment.py5')}`)) {
      prog = prog.replace(`# ${t('input.comment.py5')}`,'from py5_imported_mode import *')

      if (! prog.match(/(run_sketch)/)) {
        prog = prog.concat('\nrun_sketch()')
      }
    }

    Sk.configure({
      inputfun: inf,
      output: outf,
      read: builtinRead,
      debugging: true,
      inputTakesPrompt: true,
      uncaughtException: handleError
    });

    var myPromise = Sk.misceval.asyncToPromise(() =>
        Sk.importMainWithBody("main", false, prog, true), {
          "*": () => {
            if (store.getState().editor.codeRunStopped) {
              throw new Error(t('output.errors.interrupted'));
            }
          }
        },
    ).catch(err => {
      handleError(err)
    }).finally(()=>{
      dispatch(codeRunHandled());
    });
    myPromise.then(function (_mod) {
    })
  }

  function shiftFocusToInput(e) {
    if (document.getSelection().toString().length > 0) {
      return;
    }

    const inputBox = getInput();
    if (inputBox && e.target !== inputBox) {
      const input = getInput()
      const selection = window.getSelection();
      selection.removeAllRanges();

      if (input.innerText && input.innerText.length > 0){
        const range = document.createRange();
        range.setStart(input, 1);
        range.collapse(true);
        selection.addRange(range);
      }
      input.focus()
    }
  }

  return (
    <div className={`pythonrunner-container`}>
      { isSplitView ?
        <>
          {hasVisualOutput ? <div className='output-panel output-panel--visual'>
            <Tabs forceRenderTabPanel={true}>
              <div className='react-tabs__tab-container'>
                <TabList>
                  <Tab key={0}>
                    <span className='react-tabs__tab-inner'>{t('output.visualOutput')}</span>
                  </Tab>
                </TabList>
                {!isEmbedded ? <OutputViewToggle/> : null }
              </div>
              <TabPanel key={0} >
                <VisualOutputPane/>
              </TabPanel>
            </Tabs>
          </div> : null}
          <div className='output-panel output-panel--text'>
            <Tabs forceRenderTabPanel={true}>
              <div className='react-tabs__tab-container'>
                <TabList>
                  <Tab key={0}>
                    <span className='react-tabs__tab-inner'>{t('output.textOutput')}</span>
                  </Tab>
                </TabList>
                { hasVisualOutput || isEmbedded ? null : <OutputViewToggle /> }
              </div>
              <ErrorMessage />
              <TabPanel key={0}>
                <pre className={`pythonrunner-console pythonrunner-console--${settings.fontSize}`} onClick={shiftFocusToInput} ref={output}></pre>
              </TabPanel>
            </Tabs>
          </div>
      </>
      :
      <Tabs forceRenderTabPanel={true} defaultIndex={hasVisualOutput ? 0 : 1}>
        <div className='react-tabs__tab-container'>
          <TabList>
            {hasVisualOutput ?
              <Tab key={0}>
                <span className='react-tabs__tab-inner'>{t('output.visualOutput')}</span>
              </Tab> : null
            }
            <Tab key={1}>
              <span className='react-tabs__tab-inner'>{t('output.textOutput')}</span>
            </Tab>
          </TabList>
          {!isEmbedded ? <OutputViewToggle/> : null }
        </div>
        <ErrorMessage />
        {hasVisualOutput ?
          <TabPanel key={0} >
            <VisualOutputPane/>
          </TabPanel> : null
        }
        <TabPanel key={1}>
          <pre className={`pythonrunner-console pythonrunner-console--${settings.fontSize}`} onClick={shiftFocusToInput} ref={output}></pre>
        </TabPanel>
      </Tabs>
      }
    </div>
  );
};

export default PythonRunner;
