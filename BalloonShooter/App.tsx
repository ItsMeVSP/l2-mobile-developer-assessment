/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const BalloonPopGame = () => {
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  type Balloon = {
    key: string;
    top: number;
    left: number;
    speed: number;
  };
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [time, setTime] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBalloon = {
        key: String(balloons.length),
        top: height,
        left: Math.random() * (width - 50),
        speed: Math.random() * 2 + 1,
      };
      setBalloons([...balloons, newBalloon]);
    }, 16);

    return () => clearInterval(interval);
  }, [balloons]);

  const popBalloon = (index: number) => {
    const newBalloons = [...balloons];
    const poppedBalloon = newBalloons.splice(index, 1)[0];
    if (poppedBalloon.top > 0) {
      setScore(score + 2);
    } else {
      setMissed(missed + 1);
    }
    setBalloons(newBalloons);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {Math.floor(time / 60)
          .toString()
          .padStart(2, '0')}
        :{(time % 60).toString().padStart(2, '0')}
      </Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreLabel}>Balloons Popped: {score}</Text>
        <Text style={styles.scoreLabel}>Balloons Missed: {missed}</Text>
      </View>
      {balloons.map((balloon, index) => (
        <TouchableOpacity
          key={balloon.key}
          style={[styles.balloon, {top: balloon.top, left: balloon.left}]}
          onPress={() => popBalloon(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    paddingTop: 50,
  },
  timer: {
    fontSize: 32,
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  scoreLabel: {
    fontSize: 18,
  },
  balloon: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    zIndex: 1,
  },
});

export default BalloonPopGame;
