import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, ActivityIndicator } from "react-native";
import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";
import { useLocalSearchParams, useRouter } from "expo-router";
import { PrimaryButton } from "./button";
import { Counter } from "./counter";
import { Question } from "../api/questionInterface";
import { fetchQuizData } from "../api/apiFetch";
import { useCounter } from "../hooks/useCounter";

export function Gameboard() {
  const router = useRouter();

  //hämtar kategorin och titel från handleSelect(val av kategori)
  const { category, catTitle } = useLocalSearchParams();

  //hämtar countern från useCounter egen hook
  const counter = useCounter(30);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState(0);
  const [loader, setLoader] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState<string[]>([]);


  //starta hämtningen av frågor från vald kategori via localsearchparams
  useEffect(() => {
    if (category) {
      startQuiz(category as string);
    }
  }, [category]);

  const startQuiz = async (category: string) => {
    setLoader(true);

    //hämtar 5 lätta, 5 medium, 10 svåra frågor från fetchQuizData
    try {
      const data = await fetchQuizData(category);

      setQuestions(data);
      setIndex(0);
      setScore(0);
    } catch (error) {
      console.error("Fetch failed");
    } finally {
      setLoader(false);
    }
  };

  //blanda svarsalternativen så att inte rätt svar är på första plats hela tiden. körs bara en gång vid ny fråga.
  useEffect(() => {
    if (questions[index]) {
      const all = [
        questions[index].correctAnswer,
        ...questions[index].incorrectAnswers,
      ];
      setCurrentAnswers(all.sort(() => Math.random() - 0.5));
    }
  }, [index, questions]);

  // hantera svarsalternativen:
  const handleAnswer = (selected: string) => {
    //avbryt om frågor inte finns:
    if (!questions[index]) return;

    // om rätt svar och fler frågor finns:
    const isCorrect = selected === questions[index].correctAnswer;

    if (isCorrect && index < questions.length - 1) {
      setIndex(index + 1);
      setScore(score + 1);

      //om man svarar fel eller rätt på sista frågan.
    } else {
      const finalResult = isCorrect ? score + 1 : score;

      router.push({
        pathname: "/end",
        params: { finalScore: finalResult },
      });
    }
  };

  // om sidan laddar, visa snurran
  if (loader || questions.length === 0) {
    return (
      <View style={styles.view}>
        <ActivityIndicator size="large" color={Colors.light} />
        <Text style={{ color: "white", textAlign: "center", marginTop: 15 }}>
          Loading questions...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.view}>
      <Counter counter={counter} />
      <View style={styles.container}>
        <View style={styles.catContainer}>
          <Text style={Typography.subTitle}>{catTitle}</Text>
        </View>

        <Text style={Typography.subTitle}>
          {questions[index].question.text}
        </Text>

        {/* Printa ut alla fyra svarsalternativ blandade:  */}
        <View style={styles.answers}>
          {currentAnswers.map((answer, index) => (
            <Pressable
              key={index}
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
    textAlign: "center",
    borderRadius: 30,
    marginBottom: 10,
  },
  answers: {
    backgroundColor: Colors.purple,
    color: Colors.light,
    gap: 15,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  answerBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
    padding: 15,
    width: "100%",
  },
});
