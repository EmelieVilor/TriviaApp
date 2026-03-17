import { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { PrimaryButton } from "../components/button";
import { Colors } from "../constants/colors";

// Vilka typer som ska hämtas från API
interface Question {
  id: string;
  category:
    | "music"
    | "sport_and_leisure"
    | "film_and_tv"
    | "arts_and_literature"
    | "history"
    | "society_and_culture"
    | "science"
    | "geography"
    | "food_and_drink"
    | "general_knowledge";
  question: string;
  difficulty: "easy" | "medium" | "hard";
  correctAnswer: string;
  incorrectAnswer: string[];
  showAnswer: boolean;
}

//Hämta data

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  const fetchQuestions = async (
    category: string,
    difficulty: string,
    limit: number,
  ) => {
    try {
      const response = await fetch(
        `https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=${difficulty}&limit=${limit}`,
      );

      if (!response.ok)
        throw new Error("Quiz data fetch failed. Status: " + response.status);

      const data: Question[] = await response.json();
      return data;
    } catch (error) {
      console.error("This seems to be the problem: ", error);
      return [];
    }
  };

  const testPrint = async () => {
    setLoader(true);
    console.log("TEST STARTAR:");

    const result = await fetchQuestions("music", "easy", 2);

    console.log("Här är all hämtad data:");
    console.log(JSON.stringify(result, null, 2)); // Gör JSON-datan lättläst i loggen (ta bort sen!)

    setQuestions(result);
    setLoader(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      {/* 2. En enkel knapp för att köra testet */}
      <PrimaryButton title="Testa API" onPress={testPrint} />

      {loader && <ActivityIndicator size="large" color={Colors.light} />}
    </View>
  );
}
