/* eslint-disable react-hooks/exhaustive-deps */
import './EmbeddedViewer.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useProject } from '../Editor/Hooks/useProject'
import PythonRunner from '../Editor/Runners/PythonRunner/PythonRunner'
import RunButton from '../RunButton/RunButton'
import { setEmbedded, triggerCodeRun } from '../Editor/EditorSlice'

const EmbeddedViewer = (props) => {
  const projectLoaded = useSelector((state) => state.editor.projectLoaded);
  const projectIdentifier = props.match.params.identifier;
  const dispatch = useDispatch();
  useProject('python', projectIdentifier);

  useEffect(() => {
    dispatch(setEmbedded());
    dispatch(triggerCodeRun());
  }, []);

  return projectLoaded === true ? (
    <>
      <div className='embedded-container' >
        <RunButton buttonText="Run code" leftAlign={true} />
        <div>
          <PythonRunner />
        </div>
      </div>
    </>
  ) : <p>Loading</p>;
};

export default EmbeddedViewer;
