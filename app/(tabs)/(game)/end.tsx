import { View, StyleSheet } from "react-native";
import { Colors } from '../../constants/colors';
import { GameEnded } from '../../components/gameend';

export default function EndPage() {
    return (
        <View style={styles.container}>
            <GameEnded/>
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
  }
});
