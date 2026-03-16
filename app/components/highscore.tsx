import { View, StyleSheet, Text, Image } from "react-native";
import { Typography } from "../constants/typography";

export function Highscore() {
  return (
    <View style={styles.container}>
      <Text style={Typography.title}>All Time Highscore</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/stars.png")}
      />
      <Text style={Typography.subTitle}>Emelie: 20 points</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    height: 70,
    width: 100,
    paddingBottom: 30,
  },
});
