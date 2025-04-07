import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'
import { useSelector } from 'react-redux';

export default function FavouritesScreen() {
  const favMealIds = useSelector(state => state.favouriteMeals.ids)
  const favMeals = MEALS.filter(meal => favMealIds.includes(meal.id))
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.screen}>
        <Text>No Favourites Found. Start adding some!</Text>
      </View>
    )
  }
  return <MealList meals={favMeals}/>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})