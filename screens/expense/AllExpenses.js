import { View, Text } from 'react-native';
import ExpenseOutput from '../../components/ExpenseOutput';
export default function AllExpenses() {
  return (
    <View>
      <ExpenseOutput expensesPeriod={'All'}/>
    </View>
  );
}
