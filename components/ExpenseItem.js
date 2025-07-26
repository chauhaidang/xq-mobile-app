import { Pressable, StyleSheet, View, Text } from 'react-native';
import CustomColors from '../constants/colors';
import { getFormattedDate } from '../utils/date';
import { useNavigation } from '@react-navigation/native';

export default function ExpenseItem({id, description, amount, date }) {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate('ManageExpense', {
      expenseId: id, // Replace with actual expense ID if available
    })
  }
  return (
    <Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.buttonPressed}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: CustomColors.green_3,
    borderRadius: 6,
    padding: 12,
    marginVertical: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },
  textBase: {
    color: CustomColors.purple_1
  },
  description: {
    fontSize: 20,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    fontSize: 18,
    color: '#888',
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
