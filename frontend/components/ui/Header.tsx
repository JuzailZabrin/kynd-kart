import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  userName: string;
  onNotificationPress?: () => void;
  onMessagePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userName,
  onNotificationPress,
  onMessagePress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>
          Hi <Text style={styles.name}>{userName}</Text>
        </Text>
        <Text style={styles.subtitle}>Ready to Donate?</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onNotificationPress}
        >
          <Ionicons name="notifications-outline" size={24} color="#4CAF50" />
          <View style={styles.badge} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={onMessagePress}>
          <Ionicons name="chatbubble-outline" size={22} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#F5F8F5", // Light green background
  },
  greetingContainer: {
    flex: 1,
    marginTop: 30,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "400",
    color: "#212121",
  },
  name: {
    fontWeight: "700",
    color: "#4CAF50", // Green color for the name
  },
  subtitle: {
    fontSize: 14,
    color: "#757575",
    marginTop: 2,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  iconButton: {
    padding: 8,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF5722", // Notification badge color
    borderWidth: 1,
    borderColor: "#F5F8F5",
  },
});

export default Header;
