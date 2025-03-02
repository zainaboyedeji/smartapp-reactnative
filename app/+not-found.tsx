import { Link, Stack } from "expo-router";
import { StyleSheet, ImageBackground, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import livingroomdetails from "../assets/images/living-room-details.png";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Page Not Found" }} />
      <ImageBackground
        source={livingroomdetails}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <ThemedText type="title" style={styles.title}>
            404
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            This screen doesn't exist.
          </ThemedText>
          <Link href="/" style={styles.link}>
            <ThemedText type="link" style={styles.linkText}>
              Go to home screen!
            </ThemedText>
          </Link>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 60,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  linkText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
});
