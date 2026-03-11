import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Colors } from './constants/colors';
import { Typography } from './constants/typography';

import { useRouter } from 'expo-router';

export default function StartPage() {
const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trivia App</Text>
      <Text style={styles.subTitle}>Test your knowledge! Are you ready?</Text>
      <TouchableOpacity onPress={() => router.push('/(tabs)')} style={styles.startBtn}>
        <Text style={styles.startText}>Start Quizzing</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    gap: 25,
  },
  title: {
    color: Colors.light,
    fontSize: Typography.fsTitle,
  },
    subTitle: {
    color: Colors.light,
    fontSize: Typography.fsSubtitle,
    textAlign: 'center',
  },
    startBtn: {
    backgroundColor: Colors.secondary,
    padding: 20,
    width: 150,
    borderRadius: 50,
    boxShadow: `5px 7px 0px ${Colors.darkPurple}`,
  },
  startText: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: Typography.fsBody,
  }
});
