import React from 'react';
import useTimer from '../hooks/useTimer';

const TimerDisplay = () => {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div style={{ textAlign: 'center', marginLeft:'350px' }}>
      <h2>Timer: {timer}s</h2>
      <button onClick={startTimer} disabled={isRunning} style={{color:'green'}}>Start</button>&nbsp;&nbsp;
      <button onClick={resetTimer}>Reset</button>&nbsp;&nbsp;
      <button onClick={stopTimer} disabled={!isRunning} style={{color:'red'}}>Stop</button>&nbsp;
      
    </div>
  );
};

export default TimerDisplay;
