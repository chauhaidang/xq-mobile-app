import { View, Text, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import IconButton from '../../components/IconButton';
import CustomColors from '../../constants/colors';

export default function ManageExpense({ route, navigation }) {
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit expense' : 'Add expense',
    });
  }, [navigation, isEditing]);

  function deleteHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name={'trash'}
            size={'40'}
            color={CustomColors.red_1}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: CustomColors.background,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 4,
    borderTopWidth: 2,
    borderTopColor: CustomColors.green_2,
    alignItems: 'center',
  },
});
