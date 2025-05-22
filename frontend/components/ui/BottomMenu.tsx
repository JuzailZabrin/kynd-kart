import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface MenuItemProps {
  title: string;
  icon: string;
  isActive?: boolean;
  onPress: () => void;
}

interface BottomMenuProps {
  items: MenuItemProps[];
  backgroundColor?: string;
  activeColor?: string;
  inactiveColor?: string;
  fabItem?: {
    icon: string;
    onPress: () => void;
    backgroundColor?: string;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  icon,
  isActive = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons
        name={icon as any}
        size={24}
        color={isActive ? "#4CAF50" : "#757575"}
      />
      <Text
        style={[
          styles.menuItemText,
          { color: isActive ? "#4CAF50" : "#757575" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const BottomMenu: React.FC<BottomMenuProps> = ({
  items,
  backgroundColor = "#FFFFFF",
  activeColor = "#4CAF50",
  inactiveColor = "#757575",
  fabItem,
}) => {
  // Make sure we don't have too many items
  const menuItems = items.slice(0, fabItem ? 4 : 5);

  // Split items for layout with FAB
  const leftItems = fabItem
    ? menuItems.slice(0, 2)
    : menuItems.slice(0, Math.ceil(menuItems.length / 2));
  const rightItems = fabItem
    ? menuItems.slice(2, 4)
    : menuItems.slice(Math.ceil(menuItems.length / 2));

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.menuContainer}>
        <View style={styles.menuSection}>
          {leftItems.map((item, index) => (
            <MenuItem
              key={`left-${index}`}
              title={item.title}
              icon={item.icon}
              isActive={item.isActive}
              onPress={item.onPress}
            />
          ))}
        </View>

        {fabItem && (
          <View style={styles.fabContainer}>
            <TouchableOpacity
              style={[
                styles.fab,
                { backgroundColor: fabItem.backgroundColor || activeColor },
              ]}
              onPress={fabItem.onPress}
            >
              <Ionicons name={fabItem.icon as any} size={28} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.menuSection}>
          {rightItems.map((item, index) => (
            <MenuItem
              key={`right-${index}`}
              title={item.title}
              icon={item.icon}
              isActive={item.isActive}
              onPress={item.onPress}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  menuSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    flex: 1,
  },
  menuItemText: {
    fontSize: 12,
    marginTop: 4,
  },
  fabContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    marginBottom: 20,
  },
});

export default BottomMenu;
