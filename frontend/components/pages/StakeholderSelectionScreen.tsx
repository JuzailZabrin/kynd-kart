import React from "react";
import { StatusBar } from "react-native";
import StakeholderTypeSelection from "../ui/StakeholderTypeSelection";

const StakeholderSelectionScreen = () => {
  // Handlers for button presses
  const handleDonatePress = () => {
    console.log("Donate option selected");
    // Navigate to donation flow
  };

  const handleReceivePress = () => {
    console.log("Receive option selected");
    // Navigate to food request flow
  };

  const handleClosePress = () => {
    console.log("Close button pressed");
    // Close modal or navigate back
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <StakeholderTypeSelection
        onDonatePress={handleDonatePress}
        onReceivePress={handleReceivePress}
        onClosePress={handleClosePress}
      />
    </>
  );
};

export default StakeholderSelectionScreen;
