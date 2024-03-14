/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';

const Balloon = ({positionY}) => {
  const [yPos, setYPos] = useState(positionY); // Initial Y position

  useEffect(() => {
    const intervalId = setInterval(() => {
      setYPos(yPos + 2); // Update Y position for movement (adjust speed here)
    }, 1000);

    return () => clearInterval(intervalId);
  }, [yPos]);

  const styles = {
    position: 'absolute',
    bottom: yPos,
    left: Math.random() * 300, // Random X position
    backgroundColor: 'red', // Change color as needed
    width: 50,
    height: 50,
    borderRadius: '50%',
  };

  return <div style={styles}></div>;
};

export default Balloon;
