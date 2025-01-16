import { Text, View, Button, FlatList, StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';




type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Index() {
  const [todos, setTodo] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const storeData = async (value: Todo[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('dataTodo', jsonValue);
    } catch (e) {
    }
  };
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('dataTodo');
      if (value !== null) {
        setTodo(JSON.parse(value));
      }
    } catch (e) {
    }
  };

  useEffect(() => {
    getData();
  },[]);

  useEffect(() => {
    storeData(todos);
  },[todos]);

  const addTodo = () => {
    setTodo([
      ...todos,
      {
        id: +new Date(),
        text: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  }

  const toggleTodo = (id: number) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id 
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
    );
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  }).filter(todo => todo.text.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TodoApp</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add Todo" color={"green"} 
        onPress={addTodo}/>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="All" onPress={() => setFilter("all")} />
        </View>
        <View style={[styles.button, { marginHorizontal: 2}]}>
          <Button title="Completed" onPress={() => setFilter("completed")} />
        </View>
        <View style={styles.button}>
          <Button title="Pending" onPress={() => setFilter("pending")} />
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search todos"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={[styles.todoText, item.completed && styles.completed]}>
              {item.text}
            </Text>
            <View style={{ marginTop: 20}}>
              <Button onPress={() => toggleTodo(item.id)} color={item.completed?"red":"green"} title={item.completed ? "Undo" : "Complete"} />
              <Button color={"red"} 
                title={"Delete"} 
                onPress={() => setTodo(todos.filter(todo => todo.id !== item.id))} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    marginBottom: 10
  },
  button: {
    flex: 1,
  },
  todoItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todoText: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
