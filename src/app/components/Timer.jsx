import React, { useState, useEffect } from 'react';

const Timer = ({ timerRunning }) => {
  const [time, setTime] = useState(60); // Initialize timer with 60 seconds

  useEffect(() => {
    if (timerRunning && time > 0) {
      const timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerInterval); // Cleanup interval on component unmount
    }
  }, [time, timerRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')} min`;
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        position: "relative",
        borderRadius: "50px",
        padding: "10px 20px",
      }}
    >
      <h1 style={{ color: "#8A181A", marginLeft: "30px" }}>{formatTime(time)}</h1>
    </div>
  );
};

export default Timer;