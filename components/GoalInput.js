import React from "react";
import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
const GoalInput = (props) => {
  const [entredGoal, setEnteredGoal] = useState("");
  const goalEnteredHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(entredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.secondView}>
        <TextInput
          placeholder="input text"
          style={styles.text}
          onChangeText={goalEnteredHandler}
          value={entredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Close (x)" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD (+)" color="green" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  secondView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    borderColor: "grey",
    width: "70%",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
export default GoalInput;
