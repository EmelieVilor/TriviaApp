import { View, StyleSheet } from "react-native";
import { Colors } from '../constants/colors';
import { Category } from '../components/categories';

export default function QuizPage() {
    return (
        <View style={styles.container}>
            <Category/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});