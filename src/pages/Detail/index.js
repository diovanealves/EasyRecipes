import {
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
} from "react-native";
import { useLayoutEffect } from "react";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ingredients } from "../../components/Ingredients";
import { Instructions } from "../../components/Instructions";

export function Detail({ data }) {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data
        ? route.params.data.name
        : "Detalhes da receita.",
      headerRight: () => (
        <Pressable onPress={() => console.log("testando")}>
          <Entypo name="heart" size={28} color="#FF4141" />
        </Pressable>
      ),
    });
  }, [navigation, route.params?.data]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 14 }}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Pressable>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={44} color="#FAFAFA" />
        </View>
        <Image
          style={styles.cover}
          source={{ uri: route.params?.data.cover }}
        />
      </Pressable>

      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.ingredientsText}>
            Ingredientes ({route.params?.data.total_ingredients})
          </Text>
        </View>
        <Pressable>
          <Feather name="share-2" size={24} color="#121212" />
        </Pressable>
      </View>

      {route.params?.data.ingredients.map((ingredients) => (
        <Ingredients key={ingredients.id} data={ingredients} />
      ))}

      <View style={styles.instructionsArea}>
        <Text style={styles.instructionsText}>Modo de Preparo</Text>
        <Feather name="arrow-down" size={24} color="#FFF" />
      </View>

      {route.params?.data.instructions.map((instructions, index) => (
        <Instructions key={instructions.id} data={instructions} index={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f9ff",
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },
  cover: {
    height: 200,
    borderRadius: 14,
    width: "100%",
  },
  playIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },
  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  title: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  ingredientsText: {
    fontSize: 16,
    marginBottom: 14,
  },
  instructionsArea: {
    flexDirection: "row",
    backgroundColor: "#4cbe6c",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },

  instructionsText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#FFF",
    marginRight: 8,
  },
});
