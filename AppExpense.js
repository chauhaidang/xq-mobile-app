import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return  (
    <View style={styles.root}>
      <Text>Hello world!</Text>
      <StatusBar style={'auto'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})