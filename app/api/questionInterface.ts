// Vilka typer som hämtas från API
export interface Question {
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
  question: {
    text: string;
  };
  difficulty: "easy" | "medium" | "hard";
  correctAnswer: string;
  incorrectAnswers: string[];
}
