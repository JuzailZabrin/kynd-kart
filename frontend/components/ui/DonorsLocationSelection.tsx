import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const DonorsLocationSelectionScreen = () => {
    const [selectedLocation, setSelectedLocation] = useState('restaurant');
    
    const addresses = [
      {
        id: 'home',
        type: 'Home',
        address: 'No.36, Opposite to Police Station, Fussels Lane, Wellawatte',
      },
      {
        id: 'restaurant',
        type: 'Resturant', // Preserving the typo from the image
        address: 'No.36, Opposite to Police Station, Fussels Lane, Wellawatte',
      },
    ];

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Location</Text>
            <View style={styles.placeholder} />
          </View>
    
          <ScrollView style={styles.content}>
            {addresses.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.addressCard,
                  selectedLocation === item.id && styles.selectedCard,
                ]}
                onPress={() => setSelectedLocation(item.id)}
              >
                <MaterialIcons
                  name="location-on"
                  size={24}
                  color="#4CAF50"
                  style={styles.locationIcon}
                />
                <View style={styles.addressContent}>
                  <Text style={styles.addressType}>{item.type}</Text>
                  <Text style={styles.addressText}>{item.address}</Text>
                </View>
              </TouchableOpacity>
            ))}
    
            <TouchableOpacity style={styles.addNewAddressCard}>
              <View style={styles.addNewAddressRow}>
                <FontAwesome5 name="plus" size={18} color="#4CAF50" style={styles.plusIcon} />
                <Text style={styles.addNewAddressText}>Add New Address</Text>
                <MaterialIcons name="chevron-right" size={24} color="#999" />
              </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#f5f8f5',
        },
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 16,
        },
        backButton: {
          padding: 4,
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        placeholder: {
          width: 24,
        },
        content: {
          flex: 1,
          paddingHorizontal: 16,
          marginTop: 20,
        },
        addressCard: {
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
          alignItems: 'flex-start',
          borderWidth: 1,
          borderColor: 'transparent',
        },
        selectedCard: {
          borderColor: '#4CAF50',
          borderWidth: 1,
        },
        locationIcon: {
          marginRight: 12,
          marginTop: 2,
        },
        addressContent: {
          flex: 1,
        },
        addressType: {
          fontSize: 16,
          fontWeight: 'bold',
          marginBottom: 4,
        },
        addressText: {
          fontSize: 14,
          color: '#888',
          lineHeight: 20,
        },
        addNewAddressCard: {
          backgroundColor: 'white',
          borderRadius: 12,
          padding: 16,
          marginBottom: 24,
        },
        addNewAddressRow: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        plusIcon: {
          marginRight: 12,
        },
        addNewAddressText: {
          fontSize: 16,
          fontWeight: 'bold',
          flex: 1,
        },
        confirmButton: {
          backgroundColor: '#4CAF50',
          borderRadius: 12,
          padding: 16,
          alignItems: 'center',
          marginBottom: 40,
        },
        confirmButtonText: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
        },
      });
      
      export default DonorsLocationSelectionScreen;