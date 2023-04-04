import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLayoutEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

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
    <View style={styles.container}>
      <Text>{route.params?.data.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
});
