import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function StartPage() {
  return (
    <View style={styles.view}>
      <Text>Hej!</Text>
      <TouchableOpacity style={styles.pressables} onPress={()}>
        <Text style={styles.startText}>Klicka här! </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pressables: {
    backgroundColor: "#386fb3",
    padding: 20,
  },
  view: {
    backgroundColor: "#ffff",
  },
  startText: {
    color: "#fff",
  }
});
