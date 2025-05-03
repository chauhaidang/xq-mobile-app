import { View, Text, StyleSheet } from 'react-native';
import CustomColors from '../constants/colors';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-01-01'),
  },
  {
    id: 'e2',
    description: 'A pair of pants',
    amount: 39.99,
    date: new Date('2023-01-02'),
  },
  {
    id: 'e3',
    description: 'A pair of socks',
    amount: 9.99,
    date: new Date('2023-01-03'),
  },
];

export default function ExpenseOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: CustomColors.green_5,
  },
});
