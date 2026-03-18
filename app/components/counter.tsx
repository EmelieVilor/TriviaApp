import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";

export function Counter({ counter }: { counter: number }) {
  return (
    <View>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    height: 80,
    width: 80,
    backgroundColor: Colors.purple,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginBottom: 20,
  },
  counterText: {
    fontSize: 45,
    color: Colors.light,
  },
});
