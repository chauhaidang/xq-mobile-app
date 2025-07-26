import { Ionicons } from '@expo/vector-icons';
import { View, Pressable, StyleSheet } from 'react-native';

function IconButton({ name, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.buttonPressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
