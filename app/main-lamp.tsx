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

const MainLamp = () => {
  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(65);
  const [yellowLight, setYellowLight] = useState(60);
  const navigation = useNavigation();

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

        <View style={styles.brightnessContainer}>
          <Svg height="150" width="150" viewBox="0 0 100 100">
            <Circle
              cx="50"
              cy="50"
              r="40"
              stroke="#000"
              strokeWidth="4"
              fill="none"
              strokeDasharray="250"
              strokeDashoffset={(100 - brightness) * 2.5}
            />
          </Svg>
          <Text style={styles.brightnessText}>Brightness</Text>
          <Text style={styles.brightnessValue}>{brightness}%</Text>
        </View>

        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleText}>Schedule</Text>
          <Text style={styles.scheduleTime}>
            From <Text style={styles.boldText}>15:00P.M</Text> to{" "}
            <Text style={styles.boldText}>22:30P.M</Text>
          </Text>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Yellow light</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={yellowLight}
            onValueChange={setYellowLight}
            minimumTrackTintColor="#000"
            maximumTrackTintColor="#ccc"
            thumbTintColor="#000"
          />
          <Text style={styles.sliderValue}>{yellowLight}%</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
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
