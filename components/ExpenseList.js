import { View, StyleSheet, FlatList, Text } from 'react-native';
import CustomColors from '../constants/colors';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses }) {
  const renderExpenseHandler = (dataObj) => {
    return <ExpenseItem {...dataObj.item}/>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderExpenseHandler}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: CustomColors.purple_1,
  },
});
