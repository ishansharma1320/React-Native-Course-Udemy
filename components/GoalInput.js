import { useState } from 'react';
import { StyleSheet, View, TextInput,Button, Modal, Image} from "react-native";

export default function GoalInput(props) {
    const [enteredText, setEnteredText] = useState('');
    function handleTextInput(enteredText){
        setEnteredText(enteredText);
      }
    
    function handleAddGoalClick(){
        props.onAddGoal(enteredText);
        setEnteredText('');
    }
      
    return (
    <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
      <Image source={require('../assets/images/goal.png')} style={styles.image}></Image>
        <TextInput style={styles.goalInput} onChangeText={handleTextInput} value={enteredText} placeholder='Ex: My Goal is to ...'></TextInput>
       <View style={styles.buttonContainer}>
       <View style={styles.button}>
          <Button title='Add Goal' onPress={handleAddGoalClick} color="white" />
        </View>
        <View style={styles.button}>
          <Button title='Cancel' onPress={props.onCancel} color="white" />
        </View>
       </View>
    </View>
    </Modal>
    );
}


const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        // flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        // borderBottomWidth: 1,
        // borderColor: 'gray',
        // marginBottom: 24,
        padding: 16,
        backgroundColor: '#311b6b'
      },
      goalInput:{
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        borderRadius: 6,
        color:'#120438',
        padding: 10,
        width: '100%',
        marginVertical: 8
        // marginRight: 8
      },
      buttonContainer:{
        flexDirection: 'row',
        
      },
      button:{
        width: '40%',
        marginHorizontal: 8
      },
      image:{
        width: 100,
        height: 100
      }
})

