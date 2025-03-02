import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Switch,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRouter } from "expo-router";
import livingroomdetails from "../assets/images/living-room-details.png";
import light from "../assets/images/light.png";
import airConditioner from "../assets/images/air-conditioner.png";
import arrowBackWhite from "../assets/images/arrow-back-white.png";
import speaker from "../assets/images/speaker.png";

const RoomDetails = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [mainLampOn, setMainLampOn] = useState(false);
  const [airConditionerOn, setAirConditionerOn] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(false);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleToggle = (setState, value, route) => {
    setState(value);
    if (value) {
      router.push(route);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        source={livingroomdetails}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />

          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Image
                source={arrowBackWhite}
                accessibilityLabel="Back Arrow White"
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Living room</Text>
            <Text style={styles.subHeader}>1 active device</Text>
          </View>

          {/* CONTROL PANEL */}
          <View style={styles.controlsContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              <View style={styles.controlButton}>
                <Image source={light} accessibilityLabel="Light" />
                <Text style={styles.controlText}>Main lamp</Text>
                <Switch
                  trackColor={{ false: "#ccc", true: "#000" }}
                  thumbColor={mainLampOn ? "#fff" : "#fff"}
                  onValueChange={(value) =>
                    handleToggle(setMainLampOn, value, "/main-lamp")
                  }
                  value={mainLampOn}
                  style={styles.switch}
                />
              </View>

              <View style={[styles.controlButton, styles.disabledControl]}>
                <Image
                  source={airConditioner}
                  accessibilityLabel="Air Conditioner"
                />
                <Text style={[styles.controlText, styles.disabledText]}>
                  Air conditioner
                </Text>
                <Switch
                  trackColor={{ false: "#ccc", true: "#000" }}
                  thumbColor={airConditionerOn ? "#fff" : "#fff"}
                  onValueChange={(value) =>
                    handleToggle(setAirConditionerOn, value, "/air-conditioner")
                  }
                  value={airConditionerOn}
                  style={styles.switch}
                />
              </View>

              <View style={styles.controlButton}>
                <Image source={speaker} accessibilityLabel="Speaker" />
                <Text style={styles.controlText}>Speaker</Text>
                <Switch
                  trackColor={{ false: "#ccc", true: "#000" }}
                  thumbColor={speakerOn ? "#fff" : "#fff"}
                  onValueChange={(value) =>
                    handleToggle(setSpeakerOn, value, "/speaker")
                  }
                  value={speakerOn}
                  style={styles.switch}
                />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Slight opacity
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 40,
  },
  headerTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  subHeader: {
    color: "#ddd",
    fontSize: 16,
    marginTop: 5,
  },
  controlsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    backgroundColor: "transparent", // Ensuring the background is still an image
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  controlButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    width: 200,
    marginRight: 15,
  },
  controlText: {
    color: "black",
    marginLeft: 10,
    flex: 1,
    textAlign: "left",
    fontWeight: "600",
  },
  disabledControl: {
    opacity: 0.5,
    backgroundColor: "grey",
  },
  disabledText: {
    color: "white",
  },
  switch: {
    transform: [{ scale: 0.8 }],
  },
});

export default RoomDetails;
