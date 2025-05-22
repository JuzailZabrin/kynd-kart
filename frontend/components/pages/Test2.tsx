import React from "react";
import DonationRequestDetails from "./DonorRequestDetails";
import StakeholderSelection from "./StakeholderSelectionScreen";
import RegisterScreen from "./RegisterPage";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from "./RegisterPage";
import LoginScreen from "./LoginPage";
import HomeScreen from "./RegisterPage";

const Test = () => {
  return (
    <>
      {/* <DonorsHome /> */}
      {/* <InduvidualDonorReg /> */}
      {/* <DonationRequestDetails
        organizationName="Smile Foundation"
        description="Smile Foundation requests 10 packets of milk to nourish those in need."
        foodType="Milk"
        quantity={10}
        donatedAmount={7}
        percentageComplete={90}
        timeLeft="2 hours left"
        aboutText="Started in 2017 Smile Foundation team has evolved into united force dedicated to spreading kindness and courage, with a singular focus on making a positive impact on communities, we are committed to uplifting those in need."
        imageUri="https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs="
        onBackPress={() => console.log("Back pressed")}
        onNotificationPress={() => console.log("Notification pressed")}
        onDonatePress={() => console.log("Donate pressed")}
      /> */}

      {/* <StakeholderSelection /> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Register"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Test;
