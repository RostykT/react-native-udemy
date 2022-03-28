import { StyleSheet, Text, View, Pressable, Image, Platform } from 'react-native';
import React from 'react';
import  { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';


const MealItem = ({id, title, imageURL, duration, complexity, affordability}) => {
  
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('DetailMeal', {
            title: title,
            id: id,
        });
    };

    return (
    <View style={styles.mealItem}>
        <Pressable 
           style={({pressed}) => [pressed ? styles.buttonPressed : null ]} 
           android_ripple={{color: '#ccc'}}
           onPress={pressHandler}
        >
            <View style={styles.container}>
                <Image 
                    source={{
                        uri: imageURL,
                    }}
                    style={styles.image}
                />
                <Text style={styles.title}>{ title }</Text>
            </View>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 200, 
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8, 
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black', 
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
    }, 
    buttonPressed: {
        opacity: 0.5,
    }
    
});