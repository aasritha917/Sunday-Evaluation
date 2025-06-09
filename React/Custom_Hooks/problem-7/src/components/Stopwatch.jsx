import React from 'react';
import useTimer from '../hooks/useTimer';

function Stopwatch() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div style={{marginLeft:"500px"}}>
      <h2>Stopwatch</h2>
      <p>Timer: {timer} seconds</p>
      <button style={{color:"green"}} onClick={startTimer} disabled={isRunning}>Start</button>&nbsp;&nbsp;&nbsp;
      <button onClick={resetTimer}>Reset</button>&nbsp;&nbsp;&nbsp;
      <button style={{color:'red'}} onClick={stopTimer} disabled={!isRunning}>Stop</button>
      
    </div>
  );
}

export default Stopwatch;
