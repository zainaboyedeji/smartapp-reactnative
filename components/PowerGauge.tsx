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
      <Svg width={250} height={150} viewBox="0 0 250 150">
        {/* Segment 1 - Very light gray (rightmost) */}
        <Path
          d="M225,125 A95,95 0 0,0 175,40" // Slightly reduced arc
          stroke="#f5f5f5"
          strokeWidth={18} // Slightly reduced width to maintain spacing
          strokeLinecap="round"
          fill="none"
        />

        {/* Segment 2 - Light gray */}
        <Path
          d="M165,35 A95,95 0 0,0 95,30" // Adjusted to introduce spacing
          stroke="#e0e0e0"
          strokeWidth={18}
          strokeLinecap="round"
          fill="none"
        />

        {/* Segment 3 - Medium gray */}
        <Path
          d="M85,30 A95,95 0 0,0 35,60"
          stroke="#b0b0b0"
          strokeWidth={18}
          strokeLinecap="round"
          fill="none"
        />

        {/* Segment 4 - Dark navy (leftmost) */}
        <Path
          d="M25,70 A95,95 0 0,0 15,125"
          stroke="#1a1b2f"
          strokeWidth={18}
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
    width: 250,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "55%", // Adjusted for perfect centering
  },
  dateText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
    fontWeight: "400",
  },
  valueText: {
    fontSize: 48,
    fontWeight: "700",
    color: "#1a1b2f",
    textAlign: "center",
    letterSpacing: -1,
  },
});

export default PowerGauge;
