import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export function InfoButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.infoBtn}>
        <MaterialCommunityIcons 
            name={"information-outline"}
            size={24} 
            color={Colors.purple}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {

    },
    infoBtn: {
        height: 35,
        width: 35,
    },
});
