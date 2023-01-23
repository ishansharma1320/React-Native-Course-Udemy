import {StyleSheet, View, Text,Pressable} from 'react-native';

export default function GoalItem(props){


    function onDeleteOnTap(){
        props.onDeleteOnTap(props.id);
    }
    return (
        <View style={styles.goalView}>
            <Pressable onPress={onDeleteOnTap} android_ripple={{backgroundColor: '#210644'}} style={({pressed})=>pressed && styles.pressedText}>
                <Text style={styles.text} >{props.text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalView:{
        backgroundColor: 'blue',
        borderRadius: 6,
        marginBottom: 3,
        alignItems: 'center'
      },
      pressedText:{
        opacity: 0.5
      },
      text:{
        color: 'white',
        padding: 10,
      },
})