import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

const Form = ({ submitHandler }) => {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        onChangeText={changeHandler}
        placeholder="New todo..."
        style={styles.input}
      />
      <TouchableOpacity onPress={() => submitHandler(text)}>
        <Text style={styles.button}>Add todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 8,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
  button: {
    padding: 10,
    marginVertical: 10,
    textAlign: "center",
    backgroundColor: "tomato",
    color: "#fff",
    fontWeight: "bold",
  },
});
export default Form;
