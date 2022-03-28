import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useLayoutEffect} from 'react';
import  { useNavigation } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import MealDeails from '../components/MealDeails';

const DetailMeal = ({route}) => {
  const mealId = route.params.id;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [selectedMeal, navigation]);

  return (
    <View>
     <Image source={{uri: selectedMeal.imageUrl}} style={{
       width: 300, height: 200,
     }}/>
      <View>
          <Text>
              {selectedMeal.title}
          </Text>
       </View>
       <MealDeails 
        duration={selectedMeal.duration} 
        complexity={selectedMeal.complexity} 
        affordability={selectedMeal.affordability} 
       />
     <Text>Ingredients:</Text>
     {selectedMeal.ingredients.map((ingredient, index) => <Text key={`ingredient_${index}`}>{ingredient}</Text>)}
     <Text>Steps:</Text>
     {selectedMeal.steps.map((step, index) => <Text key={`step_${index}`}>{step}</Text>)}
    </View>
  )
}

export default DetailMeal;

const styles = StyleSheet.create({});