import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DonationRequestDetailsProps {
  organizationName: string;
  description: string;
  foodType: string;
  quantity: number;
  donatedAmount: number;
  percentageComplete: number;
  timeLeft: string;
  aboutText: string;
  imageUri: string;
  onBackPress: () => void;
  onNotificationPress: () => void;
  onDonatePress: () => void;
}

const DonationRequestDetails: React.FC<DonationRequestDetailsProps> = ({
  organizationName,
  description,
  foodType,
  quantity,
  donatedAmount,
  percentageComplete,
  timeLeft,
  aboutText,
  imageUri,
  onBackPress,
  onNotificationPress,
  onDonatePress,
}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackPress}>
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onNotificationPress}>
          <View style={styles.notificationContainer}>
            <Ionicons name="notifications-outline" size={24} color="#4CAF50" />
            <View style={styles.badge} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Main Image */}
        <Image source={{ uri: imageUri }} style={styles.mainImage} />

        {/* Organization Info */}
        <View style={styles.infoContainer}>
          <View style={styles.organizationHeader}>
            <Text style={styles.organizationName}>{organizationName}</Text>
            <View style={styles.timeContainer}>
              <Ionicons name="time-outline" size={14} color="#757575" />
              <Text style={styles.timeText}>{timeLeft}</Text>
            </View>
          </View>

          <Text style={styles.description}>{description}</Text>

          {/* Food and Quantity */}
          <View style={styles.foodQuantityContainer}>
            <View style={styles.foodContainer}>
              <Text style={styles.label}>Food</Text>
              <Text style={styles.foodType}>{foodType}</Text>
            </View>

            <View style={styles.quantityContainer}>
              <Text style={styles.label}>Quantity</Text>
              <Text style={styles.quantity}>{quantity}</Text>
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
            <Text style={styles.progressText}>
              {donatedAmount} of {quantity} Milk Packets Donated
            </Text>
          </View>

          {/* About Section */}
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitle}>About Us</Text>
            <Text style={styles.aboutText}>{aboutText}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Donate Button */}
      <View style={styles.donateButtonContainer}>
        <TouchableOpacity style={styles.donateButton} onPress={onDonatePress}>
          <Text style={styles.donateButtonText}>Donate Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    marginTop: 30,
  },
  notificationContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF5722",
  },
  scrollContainer: {
    flex: 1,
  },
  mainImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 16,
  },
  organizationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  organizationName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    fontSize: 12,
    color: "#757575",
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: "#616161",
    lineHeight: 20,
    marginBottom: 16,
  },
  foodQuantityContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  foodContainer: {
    flex: 1,
  },
  quantityContainer: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#757575",
    marginBottom: 4,
  },
  foodType: {
    fontSize: 16,
    fontWeight: "500",
    color: "#4CAF50",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "500",
    color: "#212121",
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    marginBottom: 8,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: "#757575",
  },
  aboutContainer: {
    marginBottom: 24,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 14,
    color: "#616161",
    lineHeight: 20,
  },
  donateButtonContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  donateButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  donateButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DonationRequestDetails;
