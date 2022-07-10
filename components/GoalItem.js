import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
    <View style={styles.listItems}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    opacity: 0.7,
    borderColor: "black",
    borderWidth: 1,
    margin: 4,
    borderRadius: 10,
  },
});
export default GoalItem;
