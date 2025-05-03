import { View, StyleSheet, FlatList, Text } from 'react-native';
import CustomColors from '../constants/colors';

export default function ExpenseList({ expenses }) {
  const renderExpenseHandler = (dataObj) => {
    
    return (
      <Text style={{ color: CustomColors.textBlack }}>
        {dataObj.item.description} - ${dataObj.item.amount}
      </Text>
    );
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
