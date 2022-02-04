import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, deleteHandler }) => {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.key)}>
      <View style={styles.todo}>
        <MaterialIcons name="delete" size={20} color="#555" />
        <Text style={styles.todoText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  todoText: {
    marginLeft: 7,
  },
});
export default TodoItem;
