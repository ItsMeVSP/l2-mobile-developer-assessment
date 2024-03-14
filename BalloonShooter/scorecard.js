/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

const Scorecard = ({balloonsPopped, balloonsMissed}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>Popped: {balloonsPopped}</div>
      <div style={{color: 'red'}}>Missed: {balloonsMissed}</div>
    </div>
  );
};

export default Scorecard;
