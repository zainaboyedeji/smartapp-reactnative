import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Slider from "@react-native-community/slider";

interface LightSliderProps {
  initialValue?: number;
  onValueChange?: (value: number) => void;
}

const LightSlider: React.FC<LightSliderProps> = ({
  initialValue = 60,
  onValueChange,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yellow light</Text>

      <View style={styles.sliderWrapper}>
        <View style={styles.customTrackBackground} />

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={handleValueChange}
          minimumTrackTintColor="#262626"
          maximumTrackTintColor="transparent" // Make default track invisible
          thumbTintColor="#262626"
          // We'll handle track thinness with our custom track instead of incompatible props
        />

        <View style={styles.tickMarksContainer}>
          {[...Array(11)].map((_, index) => (
            <View key={index} style={styles.tickMark} />
          ))}
        </View>

        <View style={styles.labelsContainer}>
          <Text style={styles.offLabel}>Off</Text>
        </View>
      </View>

      <Text style={styles.valueText}>{Math.round(value)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#262626",
  },
  sliderWrapper: {
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  // This is the custom thin track background
  customTrackBackground: {
    position: "absolute",
    width: "100%",
    height: 2, // Very thin track - only 2px tall
    backgroundColor: "#E0E0E0",
    top: "50%",
    marginTop: -1, // Center the track
    zIndex: 1,
  },
  slider: {
    width: "100%",
    height: 30,
    zIndex: 2,
  },
  tickMarksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 12,
  },
  tickMark: {
    width: 1,
    height: 8,
    backgroundColor: "#A0A0A0",
  },
  labelsContainer: {
    position: "absolute",
    bottom: -5,
    left: 0,
    width: "100%",
  },
  offLabel: {
    fontSize: 12,
    color: "#262626",
    position: "absolute",
    left: 0,
  },
  valueText: {
    fontSize: 12,
    color: "#262626",
    alignSelf: "center",
    marginTop: 6,
    fontWeight: "600",
  },
});

export default LightSlider;
