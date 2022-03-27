import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameOverScreen = ({guessRounds, userNumber}) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!!!</Text>
      <Text>Number of rounds: {guessRounds}</Text>
      <Text>Number was: {userNumber}</Text>

    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})