import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

interface PowerGaugeProps {
  value?: string;
  month?: string;
  year?: number;
}

const PowerGauge: React.FC<PowerGaugeProps> = ({
  value = "45kW",
  month = "June",
  year = 2023,
}) => {
  return (
    <View style={styles.container}>
      <Svg width={350} height={180} viewBox="0 0 350 180">
        {/* Rightmost very light gray segment */}
        <Path
          d="M290,135 A120,120 0 0,0 200,35"
          stroke="#f2f2f2"
          strokeWidth={22}
          strokeLinecap="round"
          fill="none"
        />

        {/* Second light gray segment from right */}
        <Path
          d="M180,27 A120,120 0 0,0 155,22"
          stroke="#d0d0d0"
          strokeWidth={22}
          strokeLinecap="round"
          fill="none"
        />

        {/* Third medium gray segment from right */}
        <Path
          d="M135,20 A120,120 0 0,0 90,33"
          stroke="#b0b0b0"
          strokeWidth={22}
          strokeLinecap="round"
          fill="none"
        />

        {/* Leftmost dark navy segment */}
        <Path
          d="M70,43 A120,120 0 0,0 35,135"
          stroke="#181828"
          strokeWidth={22}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>

      <View style={styles.textContainer}>
        <Text style={styles.dateText}>
          {month} {year}
        </Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 20,
    marginTop: 10,
  },
  textContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "50%", // Center vertically
    marginTop: -20, // Offset to position text higher
  },
  dateText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "400",
  },
  valueText: {
    fontSize: 40,
    fontWeight: "800",
    color: "#000",
    textAlign: "center",
    fontFamily: "System",
  },
});

export default PowerGauge;
