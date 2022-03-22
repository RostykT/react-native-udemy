import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'; 
import React, { useState } from 'react';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  const resetHandler = () => {
      setEnteredValue('');
      setConfirmed(false);

  };
  const confirmHandler = () => {
      const chosenNumber = parseInt(enteredValue);
      if (isNaN(chosenNumber) || chosenNumber  <= 0 || chosenNumber > 99) {
          Alert.alert('Invalid number!',
           'Number has to be a number between 1 and 99',
           [{
               text: 'Okay',
               style: 'destructive',
               onPress: resetHandler
           }])
          return;
      }
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue('');
      Keyboard.dismiss();


  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
        <Card style={styles.summary}>
            <Text>You selected: </Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title='Start game' />
        </Card>
    )
  }


  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select Number:</Text>
                <Input 
                    style={styles.input}
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                    blurOnSubmit
                    value={enteredValue}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Reset' color={Colors.accent} onPress={resetHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Confirm' color={Colors.primary} onPress={confirmHandler} />
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
    </TouchableWithoutFeedback>
    
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        padding: 10, 
        alignItems: 'center',
    }, 
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300, 
        maxWidth: '80%',
        alignItems: 'center',
        },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summary: {
        marginTop: 40,
        alignItems: 'center',
    }
})