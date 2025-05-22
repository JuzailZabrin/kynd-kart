import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const DonationSuccessScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Ionicons name="close" size={28} color="black" />
        </TouchableOpacity>
        <View style={styles.bellContainer}>
          <Ionicons name="notifications" size={24} color="#4CAF50" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationCount}>3</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.checkmarkContainer}>
          <View style={styles.checkmarkCircle}>
            <Ionicons name="checkmark" size={48} color="white" />
          </View>
        </View>

        <Text style={styles.thankYouText}>Thank You for Your Donation!</Text>
        <Text style={styles.notifyText}>
          We will notify you once accepted by a partnering NGO and provide pickup details
        </Text>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Donation Summary #345223177</Text>
          
          <View style={styles.donationItem}>
            <View style={[styles.colorIndicator, styles.greenIndicator]} />
            <Text style={styles.itemText}>9 x Cooked Rice</Text>
          </View>
          
          <View style={styles.donationItem}>
            <View style={[styles.colorIndicator, styles.redIndicator]} />
            <Text style={styles.itemText}>9 x Chicken Curry</Text>
          </View>
          
          <View style={styles.divider} />
          
          <Text style={styles.donorName}>Huzrin</Text>
          
          <View style={styles.detailItem}>
            <MaterialIcons name="location-on" size={24} color="#4CAF50" />
            <Text style={styles.detailText}>
              Grand New Pilawoos, No. 345/35, Kalubowila, Road, Dehiwala
            </Text>
          </View>
          
          <View style={styles.detailItem}>
            <MaterialIcons name="access-time" size={24} color="#4CAF50" />
            <Text style={styles.detailText}>December 21, 08:30 PM</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  closeButton: {
    padding: 4,
  },
  bellContainer: {
    position: 'relative',
    padding: 4,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCount: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  checkmarkContainer: {
    marginTop: 60,
    marginBottom: 30,
    alignItems: 'center',
  },
  checkmarkCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  notifyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  summaryCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  donationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  colorIndicator: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 12,
  },
  greenIndicator: {
    backgroundColor: '#4CAF50',
  },
  redIndicator: {
    backgroundColor: '#F44336',
  },
  itemText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 16,
  },
  donorName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  detailText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 12,
    flex: 1,
  },
});

export default DonationSuccessScreen;