import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect} from 'react';
import  { useNavigation } from '@react-navigation/native';

const DetailMeal = ({route}) => {
  const title = route.params.title;

  const navigation = useNavigation();
  console.log(navigation);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title
    });
  }, [title, navigation]);

  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default DetailMeal;

const styles = StyleSheet.create({});