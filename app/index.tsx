import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Colors } from "./constants/colors";
import { Typography } from "./constants/typography";
import { PrimaryButton } from "./components/button";

import { useRouter } from "expo-router";
import { useState } from "react";

export default function StartPage() {
  const router = useRouter();
  const [nameInput, setNameInput] = useState("Your Name...");

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.purple, Colors.primary]}
        style={styles.background}
      />
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Text style={Typography.title}>Triviatastic</Text>
      <Text style={Typography.subTitle}>
        Test your knowledge! Are you ready?
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setNameInput}
        value={nameInput}
      />
      <PrimaryButton
        title="Start Quizzing"
        onPress={() => router.push("/(tabs)/start")}
      />
      <ActivityIndicator size="large" color={Colors.purple} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    gap: 25,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.purple,
    backgroundColor: Colors.light,
    padding: 15,
    width: 220,
  },
});
