import {StyleSheet, View, Text,Pressable} from 'react-native';

export default function GoalItem(props){


    function onDeleteOnTap(){
        props.onDeleteOnTap(props.id);
    }
    return (<Pressable onPress={onDeleteOnTap}>
        <View  style={styles.goalView}>
        <Text style={styles.text} >{props.text}</Text>
       </View>
    </Pressable>);
}

const styles = StyleSheet.create({
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
})