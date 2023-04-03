import { View, Text, StyleSheet } from "react-native";

export function Search() {
  return (
    <View style={styles.container}>
      <Text>Pagina de buscar!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  },
});
