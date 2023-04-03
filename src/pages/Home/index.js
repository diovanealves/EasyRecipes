import { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Logo } from "../../components/Logo";

export function Home() {
  const [search, setSearch] = useState("");

  function handleSearch() {
    console.log(search);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da comida..."
          style={styles.input}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />

        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#4CBE6C" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0e0e0e",
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  input: {
    maxWidth: "90%",
    width: "90%",
  },
});
