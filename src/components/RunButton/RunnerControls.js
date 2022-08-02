import React from 'react';
import RunButton from "./RunButton";
import StopButton from "./StopButton";
import { useSelector } from 'react-redux';
import { RunIcon } from '../../Icons';

import './RunnerControls.scss';

const RunnerControls = () => {
  const codeRunTriggered = useSelector((state) => state.editor.codeRunTriggered);
  const drawTriggered = useSelector((state) => state.editor.drawTriggered);

  return (
    <div className="runner-controls">
      {
        (codeRunTriggered || drawTriggered) ? <StopButton buttonText="Stop Code"/> : <RunButton buttonText={<><RunIcon />Run</>}/>
      }
    </div>
  )
}

export default RunnerControls;
