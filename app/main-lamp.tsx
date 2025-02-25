import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Switch,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import Slider from "@react-native-community/slider";
import mainLamp from "../assets/images/main-lamp.png";
import { useNavigation } from "expo-router";
import arrowBackBlack from "../assets/images/arrow-back-black.png";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularBrightnessControl from "@/components/CircularBrightnessControl";
import { TimePickerDropdown } from "@/components/TimePickerDropdown";
import LightSlider from "@/components/LightSlider";
import YellowLight from "@/components/LightSlider";

const MainLamp = () => {
  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(65);
  const [yellowLight, setYellowLight] = useState(60);
  const navigation = useNavigation();
  const [startTime, setStartTime] = useState("15:00P.M");
  const [endTime, setEndTime] = useState("22:30P.M");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={arrowBackBlack}
            accessibilityLabel="Back Arrow Black"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Main lamp</Text>
        <Switch
          trackColor={{ false: "#ccc", true: "#000" }}
          thumbColor={isOn ? "#fff" : "#fff"}
          onValueChange={() => setIsOn(!isOn)}
          value={isOn}
          style={styles.switch}
        />
        <Image source={mainLamp} style={styles.lampImage} />
        <CircularBrightnessControl />
        <TimePickerDropdown
          startTime={startTime}
          endTime={endTime}
          onStartTimeChange={setStartTime}
          onEndTimeChange={setEndTime}
        />
        <LightSlider
          initialValue={60}
          onValueChange={(value) => console.log("New value:", value)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  backButton: { position: "absolute", top: 20, left: 20, zIndex: 10 },
  backText: { fontSize: 20, color: "#000" },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginTop: 50,
    marginBottom: 10,
  },
  switch: { marginTop: 10, alignSelf: "flex-start" },

  lampImage: {
    width: "100%",
    height: "40%",
    position: "absolute",
    top: 0,
    marginRight: 40,
    alignSelf: "center",
  },
  brightnessContainer: { alignItems: "center", marginTop: 20 },
  brightnessText: { fontSize: 16, fontWeight: "bold", color: "#000" },
  brightnessValue: { fontSize: 28, fontWeight: "bold", color: "#000" },
  scheduleContainer: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  scheduleText: { fontSize: 16, fontWeight: "bold", color: "#000" },
  scheduleTime: { fontSize: 14, color: "#000" },
  boldText: { fontWeight: "bold" },
  sliderContainer: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  sliderLabel: { fontSize: 16, fontWeight: "bold", color: "#000" },
  slider: { width: "100%", height: 40 },
  sliderValue: { fontSize: 14, color: "#000", textAlign: "right" },
});

export default MainLamp;
