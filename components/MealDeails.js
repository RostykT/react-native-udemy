import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealDeails = ({duration, complexity, affordability}) => {
  return (
    <View style={styles.details}>
        <Text style={styles.detailItem}>{duration} </Text>
        <Text style={styles.detailItem}>{complexity}</Text>
        <Text style={styles.detailItem}>{affordability}</Text>
    </View>
  )
}

export default MealDeails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 5,
        fontSize: 12, 
    },
});