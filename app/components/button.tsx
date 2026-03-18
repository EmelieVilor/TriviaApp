import { Pressable, View, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";

export function PrimaryButton({title, onPress}: {title: string, onPress: () => void}) {
  
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    borderRadius: 50,
    padding: 15,
    width: 220,
    boxShadow: `5px 7px 0px ${Colors.shadow}`,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: Typography.fsBody,
    textAlign: "center",
  },
});
