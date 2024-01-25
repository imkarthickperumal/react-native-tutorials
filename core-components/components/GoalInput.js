import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Goals!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <TouchableOpacity style={styles.btnItem} onPress={addGoalHandler}>
        <Text style={{ color: "white" }}>Add Goal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default GoalInput;
