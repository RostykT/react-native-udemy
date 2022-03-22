import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useState, useRef } from 'react';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

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
  const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, userChoice)
      );
  const currentLow = useRef(1);
  const currentHight = useRef(100);

  const nextGuessHandler = direction => {
      if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice )) {
          Alert.alert('Don\'t lie', 'You know that this is wrong...', [
              {text: 'Sorry', style: 'cancel'}
            ]);
            return
      };
      if (direction === 'lower') {
        currentHight.current = currentGuess;
      } else {
          currentLow.current = currentGuess
      };

      const nextNumber = generateRandomBetween(currentLow.current, currentHight.current, currentGuess);
      setCurrentGuess(nextNumber);

  }


  return (
    <View style={styles.screen}>
      <Text>Opponent'w Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
          <Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')}/>
          <Button title='GREATER' onPress={nextGuessHandler.bind(this, 'greater')}/>
      </Card>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});