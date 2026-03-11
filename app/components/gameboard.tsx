import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";

export function Gameboard() {
  // const [question, setQuestion] = useState('');
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.category}>Category</Text>
        <Text style={styles.question}>Question?</Text>
        <View style={styles.answers}>
          <Pressable style={styles.answerBtn}>
            <Text style={styles.answerText}>Answer 1</Text>
          </Pressable>
          <Pressable style={styles.answerBtn}>
            <Text style={styles.answerText}>Answer 2</Text>
          </Pressable>
          <Pressable style={styles.answerBtn}>
            <Text style={styles.answerText}>Answer 3</Text>
          </Pressable>
          <Pressable style={styles.answerBtn}>
            <Text style={styles.answerText}>Answer 4</Text>
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.cancelBtn}>
        <Text style={styles.cancelText}>Quit Game</Text>
      </Pressable>
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
  container: {
    backgroundColor: Colors.purple,
    borderRadius: 20,
    padding: 20,
    width: "95%",
  },
  category: {
    fontSize: Typography.fsTitle,
    color: Colors.light,
    textAlign: "center",
    marginBottom: 25,
  },
  question: {
    backgroundColor: Colors.purple,
    fontSize: Typography.fsSubtitle,
    color: Colors.light,
    textAlign: "center",
    marginBottom: 15,
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
  },
  answerText: {
    color: Colors.light,
    fontSize: Typography.fsBody,
    textAlign: "center",
  },
  cancelBtn: {
    backgroundColor: Colors.secondary,
    borderRadius: 50,
    padding: 15,
    width: "95%",
    marginTop: 20,
  },
  cancelText: {
    color: Colors.primary,
    fontSize: Typography.fsBody,
    textAlign: "center",
  },
});
