import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealDetails = ({duration, complexity, affordability, style, textStyle}) => {
  return (
    <View style={[styles.details, style]}>
        <Text style={[styles.detailItem, textStyle]}>{duration} </Text>
        <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
        <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
    </View>
  )
}

export default MealDetails;

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