import { View, StyleSheet } from "react-native";
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';
import { Highscore } from '../components/highscore';

export default function ScorePage() {
    return (
        <View style={styles.container}>
            <Highscore/>
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