import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = ({userChoice}) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice))
  return (
    <View>
      <Text>GameScreen</Text>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({})