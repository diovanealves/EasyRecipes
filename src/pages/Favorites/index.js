import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import { getFavorite } from "../../utils/storage.js";
import { FoodList } from "../../components/FoodList";

export function Favorites() {
  const [recipes, setRecipes] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getRecipe() {
      const result = await getFavorite("@appreceitas");
      if (isActive) {
        setRecipes(result);
      }
    }

    if (isActive) {
      getRecipe();
    }

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas Favoritas</Text>

      {recipes.length === 0 && (
        <Text>Você ainda não tem nenhuma receita salva.</Text>
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 14 }}
        data={recipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3f9ff",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 36,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
});
