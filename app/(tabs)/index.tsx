import React from "react";
import { View, Text, Image, StyleSheet, FlatList,SafeAreaView } from "react-native";
import { Svg, Circle } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

const rooms = [
  {
    name: "Living room",
    status: "1/3 is on",
    temp: "30°",
    image: require("../../assets/images/living-room.png"),
    icons: ["lamp", "ac", "tv"],
  },
  {
    name: "Main bedroom",
    status: "3/5 is on",
    temp: "25°",
    image: require("../../assets/images/bedroom.png"),
    icons: ["ac", "tv", "speaker", "+2"],
  },
];

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
     <View style={styles.container}>
      <Text style={styles.greeting}>Hello Alyssa!</Text>
      <Text style={styles.subtitle}>Welcome back to your smart home</Text>
      <Text style={styles.sectionTitle}>This month energy consumption</Text>
      
      <View style={styles.chartContainer}>
        <Svg width={200} height={200} viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="40" stroke="#EEE" strokeWidth="8" fill="none" />
          <Circle cx="50" cy="50" r="40" stroke="#555" strokeWidth="8" fill="none" strokeDasharray="100 100" strokeDashoffset="25" />
        </Svg>
        <View style={styles.energyText}>
          <Text>June 2023</Text>
          <Text style={styles.energyValue}>45kW</Text>
        </View>
      </View>
      
      <Text style={styles.roomHeader}>Your rooms</Text>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.roomCard}>
            <Image source={item.image} style={styles.roomImage} />
            <LinearGradient colors={["rgba(0,0,0,0.6)", "transparent"]} style={styles.overlay} />
            <Text style={styles.roomTitle}>{item.name}</Text>
            <Text style={styles.roomStatus}>{item.status}</Text>
            <View style={styles.roomDetails}>
              <Text style={styles.temp}>{item.temp}</Text>
            </View>
          </View>
        )}
      />
    </View>
 </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "white" },
  container: { flex: 1, padding: 20 },
  greeting: { fontSize: 30, fontWeight: "bold" },
  subtitle: { fontSize: 14, marginTop: 10 },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginTop: 30, 
    alignItems: "center", 
    textAlign: "center" 
  },
  roomHeader: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginTop: 30, 
  },
    chartContainer: { alignItems: "center", marginVertical: 20 },
  energyText: { position: "absolute", alignItems: "center" },
  energyValue: { fontSize: 24, fontWeight: "bold" },
  roomCard: { marginVertical: 10, borderRadius: 10, overflow: "hidden" },
  roomImage: { width: "100%", height: 150, borderRadius: 10 },
  overlay: { ...StyleSheet.absoluteFillObject, justifyContent: "center" },
  roomTitle: { position: "absolute", top: 20, left: 10, color: "#FFF", fontWeight: "bold" },
  roomStatus: { position: "absolute", top: 40, left: 10, color: "#FFF" },
  roomDetails: { position: "absolute", bottom: 10, left: 10, flexDirection: "row" },
  temp: { color: "#FFF", fontWeight: "bold" },
});

export default Dashboard;
