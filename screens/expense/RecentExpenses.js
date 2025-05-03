import { View, Text } from 'react-native';
import ExpenseOutput from '../../components/ExpenseOutput';
export default function RecentExpenses() {
  return (
    <ExpenseOutput expensesPeriod={'Last 7 days'}/>
  );
}

