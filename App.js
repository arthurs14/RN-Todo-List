import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import Header from './components/header';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'learn react native', key: '1' },
    { text: 'play animal crossing', key: '2' },
    { text: 'code code code', key: '3' },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
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
