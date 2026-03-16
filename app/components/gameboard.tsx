import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";
import { useRouter } from "expo-router";
import { PrimaryButton } from "./button";

export function Gameboard() {
  // const [question, setQuestion] = useState('');
  const router = useRouter();

  return (
    <View style={styles.view}>
      <View style={styles.counter}>
        <Text style={styles.counterText}>60</Text>
      </View>
      <View style={styles.container}>
        <Text style={Typography.title}>Category</Text>
        <Text style={Typography.subTitle}>Question?</Text>
        <View style={styles.answers}>
          <Pressable style={styles.answerBtn}>
            <Text style={Typography.body} onPress={() => router.push("/end")}>Answer 1</Text>
          </Pressable>
          <Pressable style={styles.answerBtn}>
            <Text style={Typography.body}>Answer 2</Text>
          </Pressable>
          <Pressable style={styles.answerBtn}>
            <Text style={Typography.body}>Answer 3</Text>
          </Pressable>
          <Pressable style={styles.answerBtn}>
            <Text style={Typography.body}>Answer 4</Text>
          </Pressable>
        </View>
      </View>
      <PrimaryButton title="Quit Game" onPress={() => router.push("/")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  counter: {
    height: 100,
    width: 100,
    backgroundColor: Colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 30,
  },
  counterText: {
    fontSize: 55,
    color: Colors.light,
  },
  container: {
    backgroundColor: Colors.purple,
    borderRadius: 20,
    padding: 20,
    width: "95%",
    gap: 15,
    marginBottom: 20,
  },
  answers: {
    backgroundColor: Colors.purple,
    color: Colors.light,
    gap: 10,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "48%",
    height: 150,
  },
  answerBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
    padding: 15,
    width: "100%",
  }
});
