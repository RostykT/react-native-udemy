import { StyleSheet, FlatList, View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverview = ({ route, navigation }) => {

const catId = route.params.categoryId;

const displayedMeals = MEALS.filter((mealItem) => {
  return mealItem.categoryIds.indexOf(catId) >= 0;
})
useLayoutEffect(() => {
  const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
  navigation.setOptions({
    title: categoryTitle
  });
}, [catId, navigation]);


const renderDisplayMeals = itemData => {
  const item = itemData.item;
  const mealItemProps = {
    title: item.title,
    imageURL: item.imageUrl,
    duration: item.duration,
    complexity: item.complexity,
    affordability: item.affordability,
  };

  return (
    <View>
      <Text style={styles.container}>
          <MealItem  
            {...mealItemProps}
          />
      </Text>
    </View>
  )
}
  return (
    <View >
        <FlatList  
          data={displayedMeals} 
          keyExtractor={item => item.id} 
          renderItem={renderDisplayMeals}
        />
    </View>
  )
}

export default MealsOverview

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16
    }
})