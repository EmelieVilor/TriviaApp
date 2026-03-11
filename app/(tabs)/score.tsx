import { Text, View, StyleSheet } from "react-native";
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';

export default function ScorePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Time Highscore</Text>
            <Text style={styles.scores}>Emelie: 20 points</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    gap: 30,
  },
  title: {
    fontSize: Typography.fsTitle,
    color: Colors.light,
  },
  scores: {
    fontSize: Typography.fsSubtitle,
    color: Colors.light,
  },
});