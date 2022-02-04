import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const Form = ({ addTask }) => {
  const [text, setText] = useState("");

  const pressHandler = () => {
    if (text.length > 5) {
      addTask(text);
      setText("");
    } else {
      Alert.alert("Opps..", "Tasks must contain at least 5 letters");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.form}
    >
      <TextInput
        value={text}
        onChangeText={(val) => setText(val)}
        style={styles.input}
        placeholder="New task.."
      />
      <TouchableOpacity onPress={pressHandler} style={styles.button}>
        <Ionicons name="add" size={40} color="#555" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    marginLeft: 10,
  },
});

export default Form;
