import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, PanResponder, Dimensions } from "react-native";
import Svg, { Circle, Path, G } from "react-native-svg";

interface PolarCoord {
  angle: number;
  distance: number;
}

interface CartesianCoord {
  x: number;
  y: number;
}

const CircularBrightnessControl: React.FC = () => {
  const [brightness, setBrightness] = useState<number>(65);

  // Constants for the component
  const size = 240;
  const radius = size / 2;
  const center = size / 2;
  const strokeWidth = 2;
  const r = radius - strokeWidth * 2;

  // Convert cartesian to polar coordinates
  const cartesianToPolar = (
    point: CartesianCoord,
    origin: CartesianCoord
  ): PolarCoord => {
    const x = point.x - origin.x;
    const y = point.y - origin.y;
    return {
      angle: (Math.atan2(y, x) * 180) / Math.PI,
      distance: Math.sqrt(x * x + y * y),
    };
  };

  // Convert brightness percentage to angle (0-360)
  const angleToPercentage = (angle: number): number => {
    // Normalize the angle to 0-360 range
    let normAngle = (angle + 360) % 360;

    // Map 0-360 to 0-100%
    // We need to adjust since 0 degrees is at 3 o'clock position
    // For our slider, we want 0 degrees (0%) at 12 o'clock position
    normAngle = (normAngle + 90) % 360;

    // Convert angle to percentage
    return Math.round((normAngle / 360) * 100);
  };

  // PanResponder for handling touch gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const { locationX, locationY } = event.nativeEvent;

        // Convert touch point to polar coordinates
        const polarCoord = cartesianToPolar(
          { x: locationX, y: locationY },
          { x: center, y: center }
        );

        // Only update if touch is near the circle
        if (Math.abs(polarCoord.distance - r) < 50) {
          const newBrightness = angleToPercentage(polarCoord.angle);
          setBrightness(newBrightness);
        }
      },
    })
  ).current;

  // Calculate angle for the arc path
  const percentageToAngle = (percentage: number): number => {
    return percentage * 3.6; // 100% = 360 degrees
  };

  // SVG arc path generator
  const getArc = (percentage: number): string => {
    const angleInDegrees = percentageToAngle(percentage);
    const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180); // Start from top (90 degrees offset)

    // SVG arc path
    const startX = center + r * Math.cos(-Math.PI / 2); // Start at top (270 degrees)
    const startY = center + r * Math.sin(-Math.PI / 2);

    const endX = center + r * Math.cos(angleInRadians);
    const endY = center + r * Math.sin(angleInRadians);

    // Determine if the arc should be drawn clockwise
    const largeArcFlag = angleInDegrees > 180 ? 1 : 0;

    return `M ${startX} ${startY} A ${r} ${r} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  // Calculate knob position
  const getKnobPosition = (): CartesianCoord => {
    const angleInDegrees = percentageToAngle(brightness) - 90; // Adjust for starting at top
    const angleInRadians = angleInDegrees * (Math.PI / 180);

    return {
      x: center + r * Math.cos(angleInRadians),
      y: center + r * Math.sin(angleInRadians),
    };
  };

  const knobPosition = getKnobPosition();

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer} {...panResponder.panHandlers}>
        <Svg width={size} height={size}>
          {/* Background circle */}
          <Circle
            cx={center}
            cy={center}
            r={r}
            stroke="#f0f0f0"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Progress arc */}
          <Path
            d={getArc(brightness)}
            stroke="#000"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Knob */}
          <Circle cx={knobPosition.x} cy={knobPosition.y} r={10} fill="#000" />
        </Svg>

        {/* Text in the center */}
        <View style={styles.textContainer}>
          <Text style={styles.label}>Brightness</Text>
          <Text style={styles.percentage}>{brightness}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  circleContainer: {
    width: 240,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  percentage: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#151515",
  },
});

export default CircularBrightnessControl;
