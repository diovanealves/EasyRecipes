import { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text as MotiText } from "moti";

import { Logo } from "../../components/Logo";
import api from "../../services/api.js";
import { FoodList } from "../../components/FoodList";

export function Home() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);

  function handleSearch() {
    if (!search) {
      return setSearch;
    }

    let inputSearch = search;
    setSearch("");
    navigation.navigate("Search", { name: inputSearch });
  }

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get("/foods");
      setFoods(response.data);
    }

    fetchApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <MotiText
        style={styles.title}
        from={{ opacity: 0, translateY: 15 }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{ delay: 100, type: "timing", duration: 650 }}
      >
        Encontre a receita
      </MotiText>
      <MotiText
        style={styles.title}
        from={{ opacity: 0, translateY: 15 }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{ delay: 200, type: "timing", duration: 800 }}
      >
        que combina com você
      </MotiText>

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

      <FlatList
        data={foods}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
        showsVerticalScrollIndicator={false}
      />
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
