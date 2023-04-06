import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFavorite(key) {
  const favorites = await AsyncStorage.getItem(key);
  return JSON.parse(favorites) || [];
}

export async function saveFavorite(key, newRecipe) {
  let myFavorites = await getFavorite(key);
  let hasItem = myFavorites.some((item) => item.id === newRecipe.id);

  if (hasItem) {
    alert("Esse item já esta salvo na sua lista");
    return;
  }

  myFavorites.push(newRecipe);

  await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
  alert("Salvo com sucesso");
}

export async function deleteFavorite(id) {
  let recipes = await getFavorite("@appreceitas");

  let myFavorites = recipes.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
  alert("Receita removido dos favoritos");
  return myFavorites;
}

export async function isFavorite(recipe) {
  let myRecipes = await getFavorite("@appreceitas");

  const favorites = myRecipes.find((item) => item.id === recipe.id);

  if (favorites) {
    return true;
  } else {
    return false;
  }
}
