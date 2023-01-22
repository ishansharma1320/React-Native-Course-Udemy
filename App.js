import { useState } from 'react';
import { StyleSheet,  View,  FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [listOfGoals, setListOfGoals] = useState([]);
 
  function handleAddGoalButtonClick(enteredText){
    setListOfGoals(currentGoals => [...listOfGoals,enteredText]);
  }

  function onDeleteOnTap(id){
    setListOfGoals(currentGoals => {
      return currentGoals.filter((item,index) => index !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={handleAddGoalButtonClick} />
     <View style={styles.goalContainer}>
      <FlatList data={listOfGoals} renderItem={(itemData)=>{
        return <GoalItem text={itemData.item} id={itemData.index} onDeleteOnTap={onDeleteOnTap}/>;
      }}
      keyExtractor={(item,index)=>index}
      >
      </FlatList>
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

  
  goalContainer:{
    flex: 5,
  }
});
