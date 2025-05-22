import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface StakeholderTypeSelectionProps {
  onDonatePress: () => void;
  onReceivePress: () => void;
  onClosePress?: () => void;
}

const StakeholderTypeSelection: React.FC<StakeholderTypeSelectionProps> = ({
  onDonatePress,
  onReceivePress,
  onClosePress,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header with title and close button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onClosePress}>
          <Ionicons name="close" size={27} color="green" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* App Logo */}
        <Image
          source={require("../../assets/images/adaptive-icon.png")}
          style={styles.logo}
          // Fallback when image is missing
          defaultSource={require("../../assets/images/adaptive-icon.png")}
        />

        {/* Main Question */}
        <Text style={styles.mainQuestion}>Want To Share Food?</Text>

        {/* Options Container */}
        <View style={styles.optionsContainer}>
          {/* Donate Option */}
          <TouchableOpacity style={styles.optionButton} onPress={onDonatePress}>
            <View style={styles.donateIconContainer}>
              <Ionicons name="leaf-outline" size={28} color="#FFFFFF" />
              <Ionicons name="hand-left-outline" size={28} color="#FFFFFF" />
            </View>
            <Text style={styles.optionTitle}>Donate Your Food</Text>
          </TouchableOpacity>

          {/* Receive Option */}
          <TouchableOpacity
            style={styles.optionButtonOutline}
            onPress={onReceivePress}
          >
            <View style={styles.receiveIconContainer}>
              <Ionicons name="heart-outline" size={32} color="#0A8043" />
              <Ionicons name="hand-right-outline" size={28} color="#0A8043" />
            </View>
            <Text style={styles.optionTitleOutline}>Receive Your Food</Text>
            <Text style={styles.optionSubtitleOutline}>Raise a meal need</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Banner */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomImageContainer}>
          <Image
            source={require("../../assets/images/adaptive-icon.png")}
            style={styles.hungryCharacter}
            // Fallback when image is missing
            defaultSource={require("../../assets/images/adaptive-icon.png")}
          />
        </View>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerText}>I'm so hungry, need some food!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FFF9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F9FFF9",
    position: "fixed",
    left: 330,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#4A90E2",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#F9FFF9", // Light green background
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 24,
  },
  mainQuestion: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0A8043", // Dark green
    marginBottom: 40,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
  },
  optionButton: {
    alignItems: "center",
    backgroundColor: "#0A8043", // Dark green
    borderRadius: 50,
    padding: 16,
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  optionButtonOutline: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    padding: 16,
    width: 100,
    height: 100,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#0A8043", // Dark green
  },
  donateIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  receiveIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  optionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  optionTitleOutline: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0A8043", // Dark green
    textAlign: "center",
  },
  optionSubtitle: {
    fontSize: 10,
    color: "#E0E0E0",
    textAlign: "center",
  },
  optionSubtitleOutline: {
    fontSize: 10,
    color: "#757575",
    textAlign: "center",
  },
  bottomContainer: {
    width: "100%",
    backgroundColor: "#0A8043", // Dark green
  },
  bottomImageContainer: {
    alignItems: "center",
    marginTop: -60,
  },
  hungryCharacter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E8F5E9", // Light green background
  },
  bannerTextContainer: {
    padding: 12,
    alignItems: "center",
  },
  bannerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default StakeholderTypeSelection;
