import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const DonorRegistrationScreen = () => {
    const [formData, setFormData] = useState({
      phoneNumber: '',
      location: '',
      nic: '',
      password: '',
    });

    const handleChange = (field: string, value: string) => {
        setFormData({
          ...formData,
          [field]: value,
        });
      };
    
        const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Register</Text>
            <View style={styles.placeholder} />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Your Phone Number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={formData.phoneNumber}
                onChangeText={(text) => handleChange('phoneNumber', text)}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Location</Text>
              <View style={styles.locationInputContainer}>
                <MaterialIcons name="location-on" size={20} color="#999" style={styles.locationIcon} />
                <TextInput
                  style={styles.locationInput}
                  placeholder="Your Location"
                  placeholderTextColor="#999"
                  value={formData.location}
                  onChangeText={(text) => handleChange('location', text)}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>NIC</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Your National Identication Number"
                placeholderTextColor="#999"
                value={formData.nic}
                onChangeText={(text) => handleChange('nic', text)}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
              />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f8f5',
    },
    keyboardAvoidingContainer: {
      flex: 1,
    },
    scrollContainer: {
      flexGrow: 1,
      paddingBottom: 30,
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
    formContainer: {
      paddingHorizontal: 24,
      paddingTop: 32,
    },
    inputGroup: {
      marginBottom: 24,
    },
    inputLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#333',
    },
    textInput: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      padding: 16,
      fontSize: 16,
    },
    locationInputContainer: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    locationIcon: {
      marginRight: 8,
    },
    locationInput: {
      flex: 1,
      padding: 16,
      fontSize: 16,
    },
    submitButton: {
      backgroundColor: '#4CAF50',
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
      marginTop: 16,
    },
    submitButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
  export default DonorRegistrationScreen;
