import { View, Text, Image, StyleSheet, Button } from 'react-native';
import DetailSection from '../components/DetailSection';
import { MEALS } from '../data/dummy-data';
import CustomColors from '../constants/colors';
import SubTitle from '../components/SubTitle';
import StaticList from '../components/StaticList';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/redux/favourite';

function MealDetailsScreen({ route, navigation }) {
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const mealId = route.params.mealId;
  const filteredMeal = MEALS.find((meal) => meal.id === mealId);
  const isFavorite = favouriteMealIds.includes(mealId);
  const dispatch = useDispatch();

  function changeFavouriteStatusHandler() {
    if (isFavorite) {
      dispatch(removeFavourite({ id: mealId }));
    } else {
      dispatch(addFavourite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name={isFavorite ? 'star' : 'star-outline'}
          color={CustomColors.buttonBackground}
          onPress={changeFavouriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavouriteStatusHandler]);
  return (
    <View>
      <Image style={styles.image} source={{ uri: filteredMeal.imageUrl }} />
      <Text style={styles.title}>{filteredMeal.title}</Text>
      <DetailSection
        duration={filteredMeal.duration}
        complexity={filteredMeal.complexity}
        affordability={filteredMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients:</SubTitle>
          <StaticList data={filteredMeal.ingredients} />
          <SubTitle>Steps:</SubTitle>
          <StaticList data={filteredMeal.steps} />
        </View>
      </View>
    </View>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    padding: 8,
  },
  detailText: {
    color: CustomColors.textTitle,
    fontWeight: 'bold',
  },
  listContainer: {
    maxWidth: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
