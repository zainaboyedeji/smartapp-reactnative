import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Switch,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularBrightnessControl from "@/components/CircularBrightnessControl";
import { TimePickerDropdown } from "@/components/TimePickerDropdown";
import LightSlider from "@/components/LightSlider";
import mainLamp from "../assets/images/main-lamp.png";
import arrowBackBlack from "../assets/images/arrow-back-black.png";

const statusBarHeight =
  Platform.OS === "android" ? StatusBar.currentHeight || 0 : 44; // Default iOS height

const MainLamp: React.FC = () => {
  const [mainLampOn, setMainLampOn] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<string>("15:00 P.M");
  const [endTime, setEndTime] = useState<string>("22:30 P.M");
  const navigation = useNavigation();

  const handleToggle = () => {
    setMainLampOn((prev) => !prev);
  };

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

        <Text style={styles.title}>Main Lamp</Text>

        <Switch
          trackColor={{ false: "#ccc", true: "#000" }}
          thumbColor={mainLampOn ? "#fff" : "#fff"}
          onValueChange={handleToggle}
          value={mainLampOn}
          style={styles.switch}
        />

        <View pointerEvents="none">
          <Image source={mainLamp} style={styles.lampImage} />
        </View>

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
    zIndex: 20,
  },
  lampImage: {
    width: "100%",
    height: "35%",
    position: "absolute",
    top: -statusBarHeight - 30,
    left: 80,
    alignSelf: "center",
    resizeMode: "contain",
    zIndex: 10,
  },
});

export default MainLamp;
