import { Pressable, View, StyleSheet, Modal, Text } from "react-native";
import { Colors } from "../constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { PrimaryButton } from "./button";
import { Typography } from "../constants/typography";

export function InfoButton() {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Rules of the game:</Text>
                <Text style={styles.modalText}>
                   Enter your name, and start quizzing. Pick a category. Make sure to answer correctly to score points, and prove that you're the ultimate quiz master!
                </Text>
                <PrimaryButton title="Back to game" onPress={()=> setModalVisible(!modalVisible)}/>
            </View>
            </View>
        </Modal>
      <Pressable style={styles.infoBtn} onPress={() => setModalVisible(true)}>
        <MaterialCommunityIcons
          name={"information-outline"}
          size={25}
          color={Colors.light}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  infoBtn: {
    height: 35,
    width: 35,
    backgroundColor: Colors.purple,
    borderRadius: 100,
    padding: 5,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: Colors.light,
    height: 440,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    borderRadius: 30,
    padding: 40,
    boxShadow: `5px 7px 0px ${Colors.shadow}`,
  },
  modalTitle: {
    fontSize: Typography.fsSubtitle,
  },
  modalText: {
    fontSize: Typography.fsBody,
    color: Colors.dark,
    textAlign:'center',
    marginBottom: 30,
  },
});
