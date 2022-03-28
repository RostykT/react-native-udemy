import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, { useLayoutEffect} from 'react';
import  { useNavigation } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

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
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}
      />
      <View>
        <Text style={styles.title}>
            {selectedMeal.title}
        </Text>
      </View>
      <MealDetails 
        duration={selectedMeal.duration} 
        complexity={selectedMeal.complexity} 
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.wrapperListContainer}>
        <View style={styles.listContainer}>
          <Subtitle title='Ingregients:' />
            <List data={selectedMeal.ingredients} />
          <Subtitle title='Steps:' />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailMeal;

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: 350,
  }, 
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%'
  },
  wrapperListContainer: {
    alignItems: 'center',
  }
});