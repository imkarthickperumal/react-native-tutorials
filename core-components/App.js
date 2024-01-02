import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [coureseGoals, setCoureseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCoureseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goals!"
          onChangeText={goalInputHandler}
        />
        <TouchableOpacity style={styles.btnItem} onPress={addGoalHandler}>
          <Text style={{ color: "white" }}>Add Goal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={coureseGoals}
          renderItem={(itemData) => {
            return <GoalItem />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceHorizontal={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    borderRadius: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
  btnItem: {
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  goalsContainer: {
    flex: 5,
  },
});
