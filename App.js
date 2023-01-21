import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View>
      <TextInput style={styles.goalInput} placeholder='Ex: My Goal is to ...'></TextInput>
      <Button title='Submit Goal' />
     </View>
     <View>
      <Text style={styles.text}> List of Goals .... </Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding: 50
  },
  goalInput:{
    borderWidth: 2,
    borderColor: 'green',
    padding: 10,
    marginBottom: 2,
  },
  text:{
    color: 'red'
  }
});
