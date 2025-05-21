import { View, Text, StyleSheet } from 'react-native';
import CustomColors from '../constants/colors';

export default function ExpenseSummary({ expenses, periodName }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: CustomColors.green_6,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 16,
    color: CustomColors.textBlack,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CustomColors.textBlack,
  }
});
