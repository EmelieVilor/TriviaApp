import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";
import { useLocalSearchParams, useRouter } from "expo-router";
import { PrimaryButton } from "./button";
import { Question } from "../api/apiCalls";

export function Gameboard() {
  const router = useRouter();
  const { category, catTitle } = useLocalSearchParams();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState(0);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (category) {
      startQuiz(category as string);
    }
  }, [category]);

  const startQuiz = async (category: string) => {
    setLoader(true);

    try {
      const easyRes = await fetch(
        `https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=easy&limit=5`,
      );
      const easy = await easyRes.json();

      const mediumRes = await fetch(
        `https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=medium&limit=5`,
      );
      const medium = await mediumRes.json();

      const hardRes = await fetch(
        `https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=hard&limit=10`,
      );
      const hard = await hardRes.json();

      setQuestions([...easy, ...medium, ...hard]);
      setIndex(0);
      setScore(0);
    } catch (error) {
      console.error("Fetch failed");
    } finally {
      setLoader(false);
    }
  };

  const handleAnswer = (selected: string) => {

    //säkerhetskontroll
    if (!questions[index]) return;

    const isCorrect = selected === questions[index].correctAnswer;

      // Om rätt svar och fler frågor finns!!

        if (isCorrect && index < questions.length - 1) {
      setIndex(index + 1);
      setScore(score + 1);

      //Om man svarar fel eller rätt på sista frågan.
    } else {
      const finalResult = isCorrect ? score + 1 : score;

      router.push({
        pathname: "/end",
        params: { finalScore: finalResult },
      });
    }
  };

  // om sidan laddar visa snurran
  if (loader || questions.length === 0) {
    return (
      <View style={styles.view}>
        <ActivityIndicator size="large" color={Colors.light} />
        <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>
          Loading questions...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.view}>
      {loader && <ActivityIndicator size="large" color={Colors.light} />}
      <View style={styles.counter}>
        <Text style={styles.counterText}>30</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.catContainer}>
        <Text style={Typography.subTitle}>{catTitle}</Text>
        </View>

        <Text style={Typography.subTitle}>
          {questions[index].question.text}
        </Text>
        <View style={styles.answers}>
          {[
            questions[index].correctAnswer,
            ...questions[index].incorrectAnswers,
          ]
            .sort(() => Math.random() - 0.5)
            .map((answer, i) => (
              <Pressable
                key={i}
                style={styles.answerBtn}
                onPress={() => handleAnswer(answer)}
              >
                <Text style={Typography.body}>{answer}</Text>
              </Pressable>
            ))}
        </View>
      </View>
      <PrimaryButton title="Quit Game" onPress={() => router.push("/")} />
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
    alignItems: "center",
    justifyContent: "center",
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
    width: "90%",
    gap: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  catContainer: {
    backgroundColor: "#523d8a",
    paddingHorizontal: 25,
    paddingVertical: 15,
    color: Colors.light,
    textAlign: 'center',
    borderRadius: 30,
  },
  answers: {
    backgroundColor: Colors.purple,
    color: Colors.light,
    gap: 15,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
    width: '100%',
  },
  answerBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
    padding: 15,
    width: "100%",
  },
});
