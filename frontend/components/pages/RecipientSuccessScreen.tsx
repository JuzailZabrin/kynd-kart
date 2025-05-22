import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  ScrollView
} from 'react-native';

type RequestItemProps = {
  quantity: number;
  itemName: string;
  type: 'green' | 'red';
};

const RequestItem = ({ quantity, itemName, type }: RequestItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <View style={[styles.itemDot, type === 'green' ? styles.greenDot : styles.redDot]} />
      <Text style={styles.itemText}>{quantity} x {itemName}</Text>
    </View>
  );
};

const RequestConfirmationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
          <View style={styles.bellContainer}>
            <Text style={styles.bellIcon}>🔔</Text>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>3</Text>
            </View>
          </View>
        </View>

        {/* Success Icon */}
        <View style={styles.successIconContainer}>
          <View style={styles.successCircle}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Your Request Was Submitted</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          We will notify you once accepted by a partnering{'\n'}
          Donors and provide pickup details
        </Text>

        {/* Request Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Request Summary #345223177</Text>
          
          {/* Request Items */}
          <View style={styles.itemsContainer}>
            <RequestItem quantity={9} itemName="Cooked Rice" type="green" />
            <RequestItem quantity={9} itemName="Chicken Curry" type="red" />
          </View>

          <View style={styles.divider} />

          {/* User Info */}
          <Text style={styles.userName}>Huzrin</Text>

          {/* Address */}
          <View style={styles.infoRow}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.infoText}>
              Smile Foundation, 756/2, Kalubowila Road, Dehiwala
            </Text>
          </View>

          {/* Time */}
          <View style={styles.infoRow}>
            <Text style={styles.timeIcon}>🕒</Text>
            <Text style={styles.infoText}>December 21, 08:30 PM</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
  },
  closeButton: {
    padding: 10,
  },
  closeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bellContainer: {
    position: 'relative',
  },
  bellIcon: {
    fontSize: 24,
    color: '#2E7D32',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#2E7D32',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  successIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#2E7D32',
    fontSize: 40,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    lineHeight: 24,
  },
  summaryCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  itemsContainer: {
    marginBottom: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  greenDot: {
    backgroundColor: '#4CAF50',
  },
  redDot: {
    backgroundColor: '#F44336',
  },
  itemText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  locationIcon: {
    fontSize: 18,
    color: '#2E7D32',
    marginRight: 10,
  },
  timeIcon: {
    fontSize: 18,
    color: '#2E7D32',
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    flex: 1,
  },
});

export default RequestConfirmationScreen;