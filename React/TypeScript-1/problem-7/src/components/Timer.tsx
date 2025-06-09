import React, { useState, useEffect, useRef } from 'react';

const Timer: React.FC = () => {
  // State
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start the timer
  const startTimer = (): void => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  // Stop the timer
  const stopTimer = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  // Reset the timer
  const resetTimer = (): void => {
    stopTimer();
    setSeconds(0);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1>Timer: {seconds} sec</h1>
      <div style={styles.buttons}>
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '20px'
  }
};

export default Timer;
