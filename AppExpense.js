import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import ManageExpense from './screens/expense/ManageExpense';
import AllExpenses from './screens/expense/AllExpenses';
import RecentExpenses from './screens/expense/RecentExpenses';
import CustomColors from './constants/colors';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/IconButton';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: CustomColors.background },
        headerTintColor: CustomColors.green_2,
        tabBarStyle: { backgroundColor: CustomColors.background },
        tabBarActiveTintColor: CustomColors.green_2,
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              name='add'
              size={24}
              color={tintColor}
              onPress={() => {
                // Navigate to ManageExpense screen with a new expense
                navigation.navigate('ManageExpense')
              }}
            />
          );
        }
      })}
    >
      <BottomTab.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'hourglass'} color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'calendar'} color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style={'auto'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: CustomColors.background },
          headerTintColor: CustomColors.green_2,
        }}>
          <Stack.Screen
            name='ExpenseOverview'
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpense' component={ManageExpense} options={{
            presentation: 'modal',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  root: {},
});
