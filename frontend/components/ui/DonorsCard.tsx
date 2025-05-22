import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

interface DonorsCardProps {
  organizationName: string;
  imageUri: string;
  timeLeft: string;
  donatedAmount: number;
  totalAmount: number;
  unit: string;
  percentageComplete: number;
  onCardPress?: () => void;
}

const DonorsCard: React.FC<DonorsCardProps> = ({
  organizationName,
  imageUri,
  timeLeft,
  donatedAmount,
  totalAmount,
  unit,
  percentageComplete,
  onCardPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={onCardPress}
    >
      {/* Background Image */}
      <Image source={{ uri: imageUri }} style={styles.backgroundImage} />

      {/* Gradient Overlay */}
      <LinearGradient
        colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.6)"]}
        style={styles.gradient}
      />

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Organization Name */}
        <View style={styles.headerContainer}>
          <Text style={styles.organizationName}>{organizationName}</Text>

          {/* Time Left */}
          <View style={styles.timeContainer}>
            <Ionicons name="time-outline" size={14} color="#FFFFFF" />
            <Text style={styles.timeText}>{timeLeft}</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${percentageComplete}%` },
              ]}
            />
          </View>

          {/* Donation Details */}
          <View style={styles.donationDetails}>
            <Text style={styles.donationText}>
              {donatedAmount} of {totalAmount} {unit} Donated
            </Text>
            <Text style={styles.percentageText}>{percentageComplete}%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    margin: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  organizationName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  timeText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginLeft: 4,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: "#E0E0E0",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 3,
  },
  donationDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  donationText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  percentageText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DonorsCard;
