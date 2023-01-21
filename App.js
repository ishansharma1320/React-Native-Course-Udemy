import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput style={styles.goalInput} placeholder='Ex: My Goal is to ...'></TextInput>
      <Button title='Add Goal' />
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
  inputContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
   
  },
  goalInput:{
    borderWidth: 2,
    borderColor: 'green',
    padding: 10,
    marginBottom: 2,
    width: '70%',
    marginRight: 8
  },
  text:{
    color: 'red'
  }
});
