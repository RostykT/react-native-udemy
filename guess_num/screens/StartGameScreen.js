import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'; 
import React, { useState } from 'react';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
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
                    <View style={styles.button}><Button title='Reset' color={Colors.accent} /></View>
                    <View style={styles.button}><Button title='Confirm' color={Colors.primary}/></View>
                </View>
            </Card>
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
    }
})