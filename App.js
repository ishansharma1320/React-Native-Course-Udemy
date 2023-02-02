import { useState } from 'react';
import { StyleSheet,  View,  FlatList, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function openModalHandler(){
    setModalIsVisible(true);
  }
  function closeModalHandler(){
    setModalIsVisible(false);
  }
  function handleAddGoalButtonClick(enteredText){
    setListOfGoals(currentGoals => [...listOfGoals,enteredText]);
    closeModalHandler();
  }

  function onDeleteOnTap(id){
    setListOfGoals(currentGoals => {
      return currentGoals.filter((item,index) => index !== id);
    });
  }
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title='Add a Goal' color='white' onPress={openModalHandler}></Button>
      {modalIsVisible && <GoalInput onAddGoal={handleAddGoalButtonClick} visible={modalIsVisible} onCancel={closeModalHandler}/>}
     <View style={styles.goalContainer}>
      <FlatList data={listOfGoals} renderItem={(itemData)=>{
        return <GoalItem text={itemData.item} id={itemData.index} onDeleteOnTap={onDeleteOnTap}/>;
      }}
      keyExtractor={(item,index)=>index}
      >
      </FlatList>
     </View>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  
  goalContainer:{
    flex: 5,
  }
});
