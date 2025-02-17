import React from "react";
import { View, Text, Image, Switch, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import livingroomdetails from "../assets/images/living-room-details.png";

const RoomDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <LinearGradient colors={["#C0C0C0", "#E0E0E0"]} style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Living room</Text>
          <View style={{ width: 24 }} />
        </View>
        <Text style={styles.subHeader}>1 active device</Text>
      </LinearGradient>

      {/* Room Image */}
      <View style={styles.imageContainer}>
        <Image source={livingroomdetails} style={styles.image} />
        <View style={styles.lampIndicator}>
          <Text style={styles.lampText}>Main lamp</Text>
          <Text style={styles.lampSubText}>On • 50W</Text>
        </View>
        {/* Ceiling lamp label repositioned */}
        <View style={styles.ceilingLampIndicator}>
          <Text style={styles.lampText}>Ceiling lamp</Text>
        </View>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <View style={styles.controlButton}>
          <Ionicons name="bulb" size={24} color="black" />
          <Text style={styles.controlText}>Main lamp</Text>
          <Switch value={true} />
        </View>
        <View style={[styles.controlButton, styles.disabledControl]}>
          <Ionicons name="snow" size={24} color="white" />
          <Text style={[styles.controlText, styles.disabledText]}>Air conditioner</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 3,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subHeader: {
    textAlign: "center",
    color: "gray",
    marginTop: 5,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  lampIndicator: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 10,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  ceilingLampIndicator: {
    position: "absolute",
    top: 10,
    left: "50%",
    transform: [{ translateX: -30 }],
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 8,
    borderRadius: 8,
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  lampText: {
    fontWeight: "bold",
  },
  lampSubText: {
    fontSize: 12,
    color: "gray",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  controlButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: 160,
    justifyContent: "space-between",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  disabledControl: {
    backgroundColor: "gray",
    opacity: 0.5,
  },
  controlText: {
    marginLeft: 10,
    flex: 1,
    textAlign: "left",
  },
  disabledText: {
    color: "white",
  },
});

export default RoomDetails;
