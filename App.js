import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [listOfGoals, setListOfGoals] = useState([]);
  function handleTextInput(enteredText){
    setEnteredText(enteredText);
  }
 
  function handleAddGoalButtonClick(){
    setListOfGoals(currentGoals => [...listOfGoals,enteredText]);
  }

  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput style={styles.goalInput} onChangeText={handleTextInput} placeholder='Ex: My Goal is to ...'></TextInput>
      <Button title='Add Goal' onPress={handleAddGoalButtonClick}/>
     </View>
     <View style={styles.goalContainer}>
      {listOfGoals.map((elem, index)=><View key={index} style={styles.goalView}>
        <Text style={styles.text} >{elem}</Text>
      </View>)}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
    
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 24,
    
  },
  goalInput:{
    borderWidth: 2,
    borderColor: 'green',
    padding: 10,
    width: '70%',
    
    marginRight: 8
  },
  goalView:{
    backgroundColor: 'blue',
    borderRadius: 6,
    marginBottom: 3,
    alignItems: 'center'
  },

  text:{
    color: 'white',
    padding: 10,
    
  },
  goalContainer:{
    flex: 5,
  }
});
