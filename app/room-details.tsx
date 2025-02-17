import React, { useEffect } from "react";
import {
  View,
  Text,
  Switch,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import livingroomdetails from "../assets/images/living-room-details.png";
import light from "../assets/images/light.png";
import airConditioner from "../assets/images/air-conditioner.png";
import switchBulb from "../assets/images/switch.png";
import arrowBack from "../assets/images/arrow-back.png";

const RoomDetails = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={livingroomdetails}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Image source={arrowBack} accessibilityLabel="Back Arrow" />
              </TouchableOpacity>
            <Text style={styles.headerTitle}>Living room</Text>
            <Text style={styles.subHeader}>1 active device</Text>
          </View>

          <View style={styles.controls}>
            <View style={styles.controlButton}>
              <Image source={light} accessibilityLabel="Light" />
              <Text style={styles.controlText}>Main lamp</Text>
              <Image
                source={switchBulb}
                accessibilityLabel="Switch"
              />
            </View>
            <View style={[styles.controlButton, styles.disabledControl]}>
              <Image source={airConditioner} accessibilityLabel="Air Conditioner" />{" "}
              <Text style={[styles.controlText, styles.disabledText]}>
                Air conditioner
              </Text>
              <Image source={switchBulb} accessibilityLabel="Switch" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 60,
  },
  header: {
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "grey",
    opacity:0.5,
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 0,
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
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  controlButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    width: 190,
    justifyContent: "space-between",
  },
  controlText: {
    color:"black",
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
});

export default RoomDetails;
