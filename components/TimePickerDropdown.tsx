import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import dropdown from "../assets/images/dropdown.png";

interface TimePickerProps {
  startTime: string;
  endTime: string;
  onStartTimeChange: (time: string) => void;
  onEndTimeChange: (time: string) => void;
}

// Generate time options in 30 minute intervals (12-hour format)
const generateTimeOptions = (): string[] => {
  const options: string[] = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const period = hour >= 12 ? "P.M" : "A.M";
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      const displayMinute = minute === 0 ? "00" : minute.toString();
      options.push(`${displayHour}:${displayMinute}${period}`);
    }
  }
  return options;
};

const TimePickerDropdown: React.FC<TimePickerProps> = ({
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
}) => {
  const [showStartModal, setShowStartModal] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const timeOptions = generateTimeOptions();

  const renderSelector = (
    label: string,
    value: string,
    onPress: () => void
  ) => (
    <View style={styles.selectorContainer}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.selector} onPress={onPress}>
        <Text style={styles.selectorText}>{value}</Text>
        <Image source={dropdown} style={styles.dropDown} />
      </TouchableOpacity>
    </View>
  );

  const renderTimeModal = (
    visible: boolean,
    onClose: () => void,
    onSelect: (time: string) => void
  ) => (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Select Time</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.modalDone}>Done</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={timeOptions}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.timeItem}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text style={styles.timeItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule</Text>
      <View style={styles.timePickerContainer}>
        {renderSelector("From", startTime, () => setShowStartModal(true))}
        <Text style={styles.toText}>to</Text>
        {renderSelector("", endTime, () => setShowEndModal(true))}
      </View>

      {renderTimeModal(
        showStartModal,
        () => setShowStartModal(false),
        onStartTimeChange
      )}
      {renderTimeModal(
        showEndModal,
        () => setShowEndModal(false),
        onEndTimeChange
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#333",
  },
  timePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginTop: 1,
    marginRight: 4,
  },
  selector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectorText: {
    fontSize: 16,
    fontWeight: "500",
  },
  chevron: {
    fontSize: 14,
    color: "#555",
  },
  toText: {
    marginLeft: 40,
    fontSize: 16,
    color: "#555",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: "50%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  modalCancel: {
    fontSize: 16,
    color: "#555",
  },
  modalDone: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "600",
  },
  timeItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  timeItemText: {
    fontSize: 16,
  },
  dropDown: {
    marginLeft: 4,
  },
});

export default TimePickerDropdown;

export { TimePickerDropdown };
