import { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";
import { PrimaryButton } from "./button";
import { useRouter } from "expo-router";

export function Category() {
  // const [category, setCategory] = useState('');
  const router = useRouter();

  const handleSelect = (category: string, catTitle: string) => {
    router.push({
      pathname: "/game",
      params: { category, catTitle },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Text style={Typography.subTitle}>Pick your category:</Text>
        <View style={styles.categoryList}>
          <PrimaryButton 
          title="Music" 
          onPress={() => handleSelect("music", "Music")} />
          <PrimaryButton
            title="Sport & Leisure"
            onPress={() => handleSelect("sport_and_leisure", "Sport & Leisure")}
          />
          <PrimaryButton
            title="Film & Tv"
            onPress={() => handleSelect("film_and_tv", "Film & Tv")}
          />
           <PrimaryButton
            title="Arts & Literature"
            onPress={() => handleSelect("arts_and_literature","Arts & Literature")}
          />
           <PrimaryButton
            title="History"
            onPress={() => handleSelect("history","History")}
          />
           <PrimaryButton
            title="Society & Culture"
            onPress={() => handleSelect("society_and_culture","Society & Culture")}
          />
           <PrimaryButton
            title="Science"
            onPress={() => handleSelect("science","Science")}
          />
           <PrimaryButton
            title="Geography"
            onPress={() => handleSelect("geography","Geography")}
          />
           <PrimaryButton
            title="Food & Drinks"
            onPress={() => handleSelect("food_and_drink","Food & Drinks")}
          />
           <PrimaryButton
            title="General Knowledge"
            onPress={() => handleSelect("general_knowledge","General Knowledge")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollContent: {
        paddingTop: 70,
        paddingBottom: 30,
    },
  container: {
    backgroundColor: Colors.purple,
    borderRadius: 20,
    padding: 30,
    gap: 30,
  },
  categoryList: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  categoryBtn: {
    backgroundColor: Colors.secondary,
    borderRadius: 50,
    padding: 15,
    width: 200,
    boxShadow: `5px 7px 0px ${Colors.shadow}`,
  },
  categoryText: {
    color: Colors.primary,
    fontSize: Typography.fsBody,
    textAlign: "center",
  },
});
