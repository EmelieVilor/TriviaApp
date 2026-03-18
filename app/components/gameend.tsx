import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";
import { PrimaryButton } from "./button";
import { useRouter, useLocalSearchParams } from "expo-router";

export function GameEnded() {
  const router = useRouter();
  const { finalScore } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={Typography.title}> Game Ended </Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/emoji.png")}
      />
      <Text style={Typography.subTitle}> Your points: {finalScore}</Text>
      <PrimaryButton title="Retry!" onPress={() => router.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    gap: 30,
  },
  image: {
    height: 100,
    width: 100,
  },
});
