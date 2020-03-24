import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'learn react native', key: '1' },
    { text: 'play animal crossing', key: '2' },
    { text: 'code code code', key: '3' },
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.key !== key));
  };

  const submitHandler = text => {
    setTodos(prevTodos => [
      { text, key: Math.random().toString() },
      ...prevTodos,
    ]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;
