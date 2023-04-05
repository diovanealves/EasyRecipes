import { View, StyleSheet, Text } from "react-native";

export function Instructions({ data, index }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{index + 1}- </Text>
      <Text style={styles.text}>{data.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    padding: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    lineHeight: 20,
  },
});
