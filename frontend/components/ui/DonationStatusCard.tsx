import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface DonationStatusCardProps {
  donationId: string;
  status: "Pending" | "Approved" | "Rejected" | "Completed";
  onViewMorePress: () => void;
}

const DonationStatusCard: React.FC<DonationStatusCardProps> = ({
  donationId,
  status,
  onViewMorePress,
}) => {
  // Determine status color based on status type
  const getStatusColor = () => {
    switch (status) {
      case "Approved":
        return "#4CAF50"; // Green
      case "Rejected":
        return "#F44336"; // Red
      case "Completed":
        return "#2196F3"; // Blue
      case "Pending":
      default:
        return "#F44336"; // Red for pending
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Text style={styles.title}>Recent Donation Status</Text>
          <Text style={styles.donationId}>Donation ID - #{donationId}</Text>

          <View style={styles.statusContainer}>
            <View
              style={[styles.statusDot, { backgroundColor: getStatusColor() }]}
            />
            <Text style={styles.statusText}>{status}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onViewMorePress}
          style={styles.viewMoreButton}
        >
          <Text style={styles.viewMoreText}>View More &gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4CAF50", // Green color matching the image
    marginBottom: 4,
  },
  donationId: {
    fontSize: 14,
    color: "#616161",
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    color: "#616161",
  },
  viewMoreButton: {
    padding: 4,
  },
  viewMoreText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4CAF50", // Green color matching the image
  },
});

export default DonationStatusCard;
