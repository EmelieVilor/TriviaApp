import { View, StyleSheet } from "react-native";
import { Colors } from '../../constants/colors';
import { Gameboard } from '../../components/gameboard';

export default function QuizPage() {
    return (
        <View style={styles.container}>
            <Gameboard/>
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
});