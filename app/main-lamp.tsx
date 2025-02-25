import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Switch,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularBrightnessControl from "@/components/CircularBrightnessControl";
import { TimePickerDropdown } from "@/components/TimePickerDropdown";
import LightSlider from "@/components/LightSlider";
import mainLamp from "../assets/images/main-lamp.png";
import arrowBackBlack from "../assets/images/arrow-back-black.png";

const MainLamp = () => {
  const [mainLampOn, setMainLampOn] = useState(false);
  const [startTime, setStartTime] = useState("15:00 P.M");
  const [endTime, setEndTime] = useState("22:30 P.M");
  const navigation = useNavigation();

  // Function to toggle state properly
  const handleToggle = (setState) => {
    setState((prev) => !prev);
  };

  // Debugging: Check if the switch is responding
  useEffect(() => {
    console.log("Switch state updated:", mainLampOn);
  }, [mainLampOn]);

  // Hide the header when component mounts
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={arrowBackBlack}
            accessibilityLabel="Back Arrow Black"
          />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Main Lamp</Text>

        {/* Switch */}
        <Switch
          trackColor={{ false: "#ccc", true: "#000" }}
          thumbColor={mainLampOn ? "#fff" : "#fff"}
          onValueChange={() => handleToggle(setMainLampOn)}
          value={mainLampOn}
          style={styles.switch}
        />

        {/* Lamp Image */}
        <Image source={mainLamp} style={styles.lampImage} />

        {/* Circular Brightness Control */}
        <CircularBrightnessControl />

        {/* Time Picker */}
        <TimePickerDropdown
          startTime={startTime}
          endTime={endTime}
          onStartTimeChange={setStartTime}
          onEndTimeChange={setEndTime}
        />

        {/* Light Slider */}
        <LightSlider
          initialValue={60}
          onValueChange={(value) => console.log("New value:", value)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  backButton: {
    position: "absolute",
    top: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginTop: 50,
    marginBottom: 10,
  },
  switch: {
    marginTop: 10,
    alignSelf: "flex-start",
    zIndex: 10,
  },
  lampImage: {
    width: "100%",
    height: "26%",
    position: "absolute",
    top: 0,
    alignSelf: "center",
    zIndex: 10,
  },
});

export default MainLamp;
