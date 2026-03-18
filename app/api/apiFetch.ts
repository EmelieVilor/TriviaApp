export const fetchQuizData = async (category: string) => {
  //hämtar 5 lätta, 5 medium, 10 svåra frågor
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

    return [...easy, ...medium, ...hard];
  } catch (error) {
    console.error("Fetch failed");
    return [];
  }
};
