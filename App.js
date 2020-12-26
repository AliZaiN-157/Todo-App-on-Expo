import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';


export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Practice Programming', key: '1' },
    { text: 'Take a bath', key: '2' },
    { text: 'Go for running', key: '3' },
    { text: 'Take a nap', key: '4' },

  ])

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos,
      ]
    })
  }

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key)
    })
  }

  return (
    <View style={styles.container}>
      <Header submitHandler={submitHandler} />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 30,
  },
});
