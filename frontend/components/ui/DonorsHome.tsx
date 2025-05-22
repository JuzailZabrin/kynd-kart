import React from "react";
import { View, FlatList } from "react-native"; // Import FlatList
import DonorsCard from "./DonorsCard";
import BottomMenu from "./BottomMenu";
import DonationStatusCard from "./DonationStatusCard";
import SearchBar from "./SearchBar";
import Header from "./Header";

const donorsData = [
  {
    id: "1",
    organizationName: "Smile Foundation",
    imageUri:
      "https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs=",
    timeLeft: "2 hours left",
    donatedAmount: 7,
    totalAmount: 10,
    unit: "Milk Packets",
    percentageComplete: 90,
  },
  {
    id: "2",
    organizationName: "Smile Foundation",
    imageUri:
      "https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs=",
    timeLeft: "2 hours left",
    donatedAmount: 7,
    totalAmount: 10,
    unit: "Milk Packets",
    percentageComplete: 90,
  },
  {
    id: "3",
    organizationName: "Smile Foundation",
    imageUri:
      "https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs=",
    timeLeft: "2 hours left",
    donatedAmount: 7,
    totalAmount: 10,
    unit: "Milk Packets",
    percentageComplete: 90,
  },
];

const DonorsHome = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        userName="Huzrin"
        onNotificationPress={() => console.log("Notification pressed")}
        onMessagePress={() => console.log("Message pressed")}
      />
      <SearchBar />
      <DonationStatusCard
        donationId="0002345"
        status="Pending"
        onViewMorePress={() => console.log("View more pressed")}
      />

      {/* Use FlatList for better performance */}
      <FlatList
        data={donorsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DonorsCard
            organizationName={item.organizationName}
            imageUri={item.imageUri}
            timeLeft={item.timeLeft}
            donatedAmount={item.donatedAmount}
            totalAmount={item.totalAmount}
            unit={item.unit}
            percentageComplete={item.percentageComplete}
            onCardPress={() => console.log("Card pressed")}
          />
        )}
      />

      <BottomMenu
        items={[
          {
            title: "Home",
            icon: "home-outline",
            isActive: true,
            onPress: () => console.log("Home pressed"),
          },
          {
            title: "Search",
            icon: "search-outline",
            onPress: () => console.log("Search pressed"),
          },
          {
            title: "Notifications",
            icon: "notifications-outline",
            onPress: () => console.log("Notifications pressed"),
          },
          {
            title: "Profile",
            icon: "person-outline",
            onPress: () => console.log("Profile pressed"),
          },
        ]}
        fabItem={{
          icon: "add",
          onPress: () => console.log("Add pressed"),
          backgroundColor: "#4CAF50",
        }}
      />
    </View>
  );
};

export default DonorsHome;
