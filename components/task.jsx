import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

const Task = ({ content, deleteHandler, num, isDone, setDone }) => {
  return (
    <View style={isDone ? styles.done : styles.item}>
      <TouchableOpacity
        onPress={() => {
          deleteHandler(num);
        }}
        style={styles.square}
      >
        <Feather name="x" size={28} color="#D03739" />
      </TouchableOpacity>
      <Text style={isDone ? styles.dashed : styles.text}>{content}</Text>
      <TouchableOpacity style={styles.toggle} onPress={() => setDone(num)}>
        <View style={isDone ? styles.filled : styles.empty}></View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    paddingLeft: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  done: {
    opacity: 0.9,
    backgroundColor: "#60606038",
    paddingLeft: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 17,
    color: "#333",
  },
  dashed: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 17,
    color: "#333",
    textDecorationLine: "line-through",
  },
  toggle: {
    padding: 18,
  },
  empty: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderColor: "#55BCF6",
    borderWidth: 2,
  },
  filled: {
    backgroundColor: "#55BCF6",
    width: 14,
    height: 14,
    borderRadius: 7,
    borderColor: "#55BCF6",
    borderWidth: 2,
  },
});

export default Task;
