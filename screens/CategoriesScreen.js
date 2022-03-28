import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = ({ navigation }) => {
    const renderCategoryItem = itemData => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        };
    
        return (
            <CategoryGridTile
                title = {itemData.item.title} 
                onPress={pressHandler}
                color = {itemData.item.color}
            />
            );
    };
  return (
    <FlatList
        data = {CATEGORIES}
        keyExtractor = {item => item.id}
        renderItem = {renderCategoryItem}
        numColumns={2}
    />
  )
}

export default CategoriesScreen;

const styles = StyleSheet.create({});