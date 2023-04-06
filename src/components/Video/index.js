import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { Feather } from "@expo/vector-icons";

export function VideoView({ handleClose, videoUrl }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleClose}>
        <Feather name="arrow-left" size={24} color="#FFF" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <WebView style={styles.contentView} source={{ uri: videoUrl }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#4cbe6c",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingStart: 14,
  },
  backText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 500,
  },
  contentView: {
    flex: 1,
    width: "100%",
  },
});
