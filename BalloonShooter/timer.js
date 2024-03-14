/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(120); // Initial time in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup function to stop timer on unmount
  }, [remainingTime]);

  const formattedTime = `${Math.floor(remainingTime / 60)}:${
    remainingTime % 60
  }`; // Format time (MM:SS)

  return <div style={{fontSize: 30, fontWeight: 'bold'}}>{formattedTime}</div>;
};

export default Timer;
