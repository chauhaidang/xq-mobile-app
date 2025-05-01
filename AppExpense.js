import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import ManageExpense from './screens/expense/ManageExpense';
import AllExpenses from './screens/expense/AllExpenses';
import RecentExpenses from './screens/expense/RecentExpenses';
import CustomColors from './constants/colors';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: CustomColors.background },
        headerTintColor: CustomColors.green_2,
        tabBarStyle: { backgroundColor: CustomColors.background },
        tabBarActiveTintColor: CustomColors.green_2,
      }}
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
        <Stack.Navigator>
          <Stack.Screen
            name='ExpenseOverview'
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  root: {},
});
