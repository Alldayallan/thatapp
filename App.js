import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {

    const clickHandler = () => {
      console.log("I was pressed")
    }

  return (
    <View style={styles.container}>
      <Text>Vegan Burger</Text>
      <StatusBar style="auto" />

      <Button title="Click me" onPress={clickHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    alignItems: "center",
    justifyContent: "center",
  },
});
