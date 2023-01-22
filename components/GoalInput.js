import { useState } from 'react';
import { StyleSheet, View, TextInput,Button } from "react-native";

export default function GoalInput(props) {
    const [enteredText, setEnteredText] = useState('');
    function handleTextInput(enteredText){
        setEnteredText(enteredText);
      }
    
    function handleAddGoalClick(){
        props.onAddGoal(enteredText);
        setEnteredText('');
    }
      
    return (<View style={styles.inputContainer}>
        <TextInput style={styles.goalInput} onChangeText={handleTextInput} value={enteredText} placeholder='Ex: My Goal is to ...'></TextInput>
        <Button title='Add Goal' onPress={handleAddGoalClick} />
    </View>);
}


const styles = StyleSheet.create({
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
})

