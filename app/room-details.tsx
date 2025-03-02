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
import livingroomdetails from "@/assets/images/living-room-details.png";
import light from "@/assets/images/light.png";
import airConditioner from "@/assets/images/air-conditioner.png";
import arrowBackWhite from "@/assets/images/arrow-back-white.png";
import speaker from "@/assets/images/speaker.png";

const RoomDetails = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [mainLampOn, setMainLampOn] = useState(false);
  const [airConditionerOn, setAirConditionerOn] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(false);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleToggle = (setState: any, value: any, route: any) => {
    setState(value);
    if (value) {
      router.push(route);
    }
  };

  useEffect(() => {
    StatusBar.setBackgroundColor("red");
  }, []);

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
        <Image
          source={require("@/assets/images/bent-arrow.png")}
          style={styles.circle}
        />

        <View style={styles.labelContainer}>
          <Text style={styles.labelTitle}>Main lamp</Text>
          <Text style={styles.labelSubtext}>On • 50W</Text>
        </View>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" translucent />

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

          <View style={styles.controlsContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              <TouchableOpacity
                disabled={!mainLampOn}
                style={[
                  styles.controlButton,
                  !mainLampOn && styles.disabledControl,
                ]}
              >
                <Image source={light} accessibilityLabel="Light" />
                <Text
                  style={[
                    styles.controlText,
                    !mainLampOn && styles.disabledText,
                  ]}
                >
                  Main lamp
                </Text>
                <Switch
                  trackColor={{ false: "#ccc", true: "#000" }}
                  thumbColor={mainLampOn ? "#fff" : "#fff"}
                  onValueChange={(value) =>
                    handleToggle(setMainLampOn, value, "/main-lamp")
                  }
                  value={mainLampOn}
                  style={styles.switch}
                />
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!airConditionerOn}
                style={[
                  styles.controlButton,
                  !airConditionerOn && styles.disabledControl,
                ]}
              >
                <Image
                  source={airConditioner}
                  accessibilityLabel="Air Conditioner"
                />
                <Text
                  style={[
                    styles.controlText,
                    !airConditionerOn && styles.disabledText,
                  ]}
                >
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
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!speakerOn}
                style={[
                  styles.controlButton,
                  !speakerOn && styles.disabledControl,
                ]}
              >
                <Image source={speaker} accessibilityLabel="Speaker" />
                <Text
                  style={[
                    styles.controlText,
                    !speakerOn && styles.disabledText,
                  ]}
                >
                  Speaker
                </Text>
                <Switch
                  trackColor={{ false: "#ccc", true: "#000" }}
                  thumbColor={speakerOn ? "#fff" : "#fff"}
                  onValueChange={(value) =>
                    handleToggle(setSpeakerOn, value, "/speaker")
                  }
                  value={speakerOn}
                  style={styles.switch}
                />
              </TouchableOpacity>
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
    width: "100%",
    height: "100%",
  },
  circle: {
    position: "absolute",
    top: 210, // Adjust for correct placement
    left: 200, // Adjust for correct placement
    width: 50, // Size of the indicator image
    height: 50,
    resizeMode: "contain",
  },
  labelContainer: {
    position: "absolute",
    top: 250, // Adjust based on your image
    left: 230,
    backgroundColor: "#444", // Less transparent
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
    backdropFilter: "blur(10px)", // Blur effect (if using react-native-blur)
  },
  labelTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  labelSubtext: {
    fontSize: 14,
    color: "white",
    marginTop: 4,
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "rgba(154, 154, 154, 0.75)",
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
    backgroundColor: "transparent",
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
    opacity: 0.7,
    backgroundColor: "#444",
  },
  disabledText: {
    color: "white",
  },
  switch: {
    transform: [{ scale: 0.8 }],
  },
});

export default RoomDetails;
