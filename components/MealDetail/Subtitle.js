import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({title}) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{title}:</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        color: 'white',
        fontSize: 18, 
        fontWeight: 'bold', 
        textAlign: 'center',
        color: '#e2b497'
        
      },
      subtitleContainer: {
        padding: 10,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 1,
        marginHorizontal: 14,
        marginVertical: 4,
    
      }
})