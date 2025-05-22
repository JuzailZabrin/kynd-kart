import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const OrgDonorReg = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    phoneNumber: "",
    location: "",
    organizationType: "",
    operatingHours: "",
    registrationNumber: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidView}
      >
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Register</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Business/Organization Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Business/Organization Name"
                value={formData.organizationName}
                onChangeText={(text) =>
                  handleInputChange("organizationName", text)
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Phone Number"
                keyboardType="phone-pad"
                value={formData.phoneNumber}
                onChangeText={(text) => handleInputChange("phoneNumber", text)}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Location</Text>
              <View style={styles.locationInputContainer}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color="gray"
                  style={styles.locationIcon}
                />
                <TextInput
                  style={styles.locationInput}
                  placeholder="Your Location"
                  value={formData.location}
                  onChangeText={(text) => handleInputChange("location", text)}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Business/Organization Type</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Business/Organization Type"
                value={formData.organizationType}
                onChangeText={(text) =>
                  handleInputChange("organizationType", text)
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Operating Hours</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Operating Hours"
                value={formData.operatingHours}
                onChangeText={(text) =>
                  handleInputChange("operatingHours", text)
                }
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Registration Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Registration Number"
                value={formData.registrationNumber}
                onChangeText={(text) =>
                  handleInputChange("registrationNumber", text)
                }
              />
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
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
    backgroundColor: "#f5f5f5",
  },
  keyboardAvoidView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 80,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
  },
  locationInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  locationIcon: {
    marginRight: 5,
  },
  locationInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OrgDonorReg;
