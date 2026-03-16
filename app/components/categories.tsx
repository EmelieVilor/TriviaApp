import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../constants/colors";
import { Typography } from "../constants/typography";
import { PrimaryButton } from "./button";
import { useRouter } from "expo-router";

export function Category() {
  // const [category, setCategory] = useState('');
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={Typography.subTitle}>
          Pick your category:
        </Text>
        <View style={styles.categoryList}>
          <PrimaryButton title="Science" onPress={() => router.push("/game")}/>
            <PrimaryButton title="Geography" onPress={() => router.push("/game")}/>
                <PrimaryButton title="Movies & Theatre" onPress={() => router.push("/game")}/>
                    <PrimaryButton title="Mixed" onPress={() => router.push("/game")}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple,
    borderRadius: 20,
    padding: 20,
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
