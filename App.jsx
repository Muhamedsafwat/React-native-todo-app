import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Task from "./components/task";
import Form from "./components/form";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      { text: text, key: Math.random(6).toString(), isDone: false },
    ]);
  };

  const deleteHandler = (key) => {
    setTasks(tasks.filter((item) => item.key != key));
  };

  const setDone = (key) => {
    const updatedTasks = tasks.map((item) => {
      if (item.key == key) {
        if (item.isDone === true) {
          item.isDone = false;
        } else {
          item.isDone = true;
        }
        return item;
      } else {
        return item;
      }
    });

    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's tasks</Text>
        <TouchableOpacity onPress={clearTasks}>
          <Text style={styles.clear}>clear all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {tasks.length === 0 ? (
          <View style={styles.flex}>
            <Text style={styles.errMsg}>No tasks yet !</Text>
          </View>
        ) : (
          <FlatList
            style={styles.tasks}
            data={tasks}
            renderItem={({ item }) => (
              <Task
                deleteHandler={deleteHandler}
                content={item.text}
                num={item.key}
                isDone={item.isDone}
                setDone={setDone}
              />
            )}
          />
        )}
      </View>
      <Form addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  clear: {
    color: "#2C91D4",
    fontSize: 16,
    padding: 5,
  },
  content: {
    flex: 1,
  },
  flex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errMsg: {
    fontSize: 20,
    color: "#444",
    marginBottom: 100,
  },
  tasks: {
    flex: 1,
    marginVertical: 30,
  },
});
