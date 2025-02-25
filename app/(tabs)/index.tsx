import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import temperature from "../../assets/images/temperature.png";
import light from "../../assets/images/light.png";
import airConditioner from "../../assets/images/air-conditioner.png";
import television from "../../assets/images/television.png";
import speaker from "../../assets/images/speaker.png";
import { useRouter } from "expo-router";
import PowerGauge from "@/components/PowerGauge";

const rooms = [
  {
    name: "Living room",
    status: "1/3 is on",
    temp: "30°",
    image: require("../../assets/images/living-room.png"),
    imgs: [light, airConditioner, television],
  },
  {
    name: "Main Bedroom",
    status: "3/5 is on",
    temp: "25°",
    image: require("../../assets/images/bedroom.png"),
    imgs: [airConditioner, television, speaker],
  },
];

const Dashboard = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.greeting}>Hello Lola!</Text>
        <Text style={styles.subtitle}>Welcome back to your smart home</Text>
        <Text style={styles.sectionTitle}>This month energy consumption</Text>
        <PowerGauge />
        <View style={styles.graphContainer}>
          <View style={styles.legendContainer}>
            <View style={styles.legendRow}>
              <View style={styles.legendItem}>
                <Svg height={10} width={10}>
                  <Circle cx={5} cy={5} r={5} fill="#0E0F14" />
                </Svg>
                <Text style={styles.legendText}>Air conditioner</Text>
              </View>
              <View style={styles.legendItem}>
                <Svg height={10} width={10}>
                  <Circle cx={5} cy={5} r={5} fill="#6D6E71" />
                </Svg>
                <Text style={styles.legendText}>Fridge</Text>
              </View>
            </View>
            <View style={styles.legendRow}>
              <View style={styles.legendItem}>
                <Svg height={10} width={10}>
                  <Circle cx={5} cy={5} r={5} fill="#B2B2B2" />
                </Svg>
                <Text style={styles.legendText}>Lamps</Text>
              </View>
              <View style={styles.legendItem}>
                <Svg height={10} width={10}>
                  <Circle cx={5} cy={5} r={5} fill="#EFEFEF" />
                </Svg>
                <Text style={styles.legendText}>Others</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.roomHeader}>Your rooms</Text>
        <FlatList
          data={rooms}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.roomCard}>
              <Image source={item.image} style={styles.roomImage} />
              <Text style={styles.roomTitle}>{item.name}</Text>
              <Text style={styles.roomStatus}>{item.status}</Text>
              <View style={styles.roomDetails}>
                <View style={styles.tempContainer}>
                  <Image
                    source={temperature}
                    accessibilityLabel="temperature"
                  />
                  <Text style={styles.temp}>{item.temp}</Text>
                </View>

                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => router.push("/room-details")}
                >
                  {item.imgs?.map((img, index) => (
                    <View key={index} style={styles.iconWrapper}>
                      <Image
                        source={img}
                        accessibilityLabel={`Icon ${index}`}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                  ))}
                </TouchableOpacity>
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
    textAlign: "center",
  },
  roomHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15,
  },
  graphContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  date: { fontSize: 16, color: "#0E0F14", marginTop: -10 },
  energy: { fontSize: 24, fontWeight: "bold", color: "#0E0F14" },
  legendContainer: { marginTop: 10 },
  legendRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
  },
  legendItem: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  legendText: { marginLeft: 5, fontSize: 18, color: "#0E0F14" },

  roomCard: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 20,
  },
  roomImage: { width: "100%", height: 150 },
  overlay: { ...StyleSheet.absoluteFillObject },
  roomTitle: {
    position: "absolute",
    top: 20,
    left: 15,
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  roomStatus: { position: "absolute", top: 50, left: 15, color: "#FFF" },
  roomDetails: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    position: "absolute",
    top: 90,
  },
  tempContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 6,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  temp: { marginLeft: 5, fontWeight: "bold" },
  iconContainer: { flexDirection: "row" },
  iconWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 6,
    borderRadius: 6,
    marginHorizontal: 5,
  },
});

export default Dashboard;
