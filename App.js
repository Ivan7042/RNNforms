import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName}
        placeholder='email@example.com'
        secureTextEntry
        autoCorrect={false}
        autoCapitalize='none'
      />
      <Text style ={styles.text}>My email is {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  }
});
