import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

interface FoodDonationFormProps {
  onBack: () => void;
  onSubmit: (formData: any) => void;
}

const FoodDonationForm: React.FC<FoodDonationFormProps> = ({
  onBack,
  onSubmit,
}) => {
  const [location, setLocation] = useState("");
  const [foodItems, setFoodItems] = useState("");
  const [fruitType, setFruitType] = useState("Fresh Fruits");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  const [showExpiryDatePicker, setShowExpiryDatePicker] = useState(false);
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [showPickupDatePicker, setShowPickupDatePicker] = useState(false);
  const [pickupTime, setPickupTime] = useState<Date | null>(null);
  const [showPickupTimePicker, setShowPickupTimePicker] = useState(false);
  const [qualityAssurance, setQualityAssurance] = useState(false);

  const handleSubmit = () => {
    const formData = {
      location,
      foodItems,
      fruitType,
      quantity,
      description,
      expiryDate,
      pickupDate,
      pickupTime,
      qualityAssurance,
    };
    onSubmit(formData);
  };

  const handleExpiryDateChange = (event: any, selectedDate?: Date) => {
    setShowExpiryDatePicker(false);
    if (selectedDate) {
      setExpiryDate(selectedDate);
    }
  };

  const handlePickupDateChange = (event: any, selectedDate?: Date) => {
    setShowPickupDatePicker(false);
    if (selectedDate) {
      setPickupDate(selectedDate);
    }
  };

  const handlePickupTimeChange = (event: any, selectedTime?: Date) => {
    setShowPickupTimePicker(false);
    if (selectedTime) {
      setPickupTime(selectedTime);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString();
  };

  const formatTime = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
          <View style={styles.emptySpace} />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Pickup Where?</Text>
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Food Item(s)</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., 'Apples, Oranges, Bananas'"
              value={foodItems}
              onChangeText={setFoodItems}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.formGroup, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.label}>Type of Fruit</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={fruitType}
                  onValueChange={(itemValue: React.SetStateAction<string>) =>
                    setFruitType(itemValue)
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="Fresh Fruits" value="Fresh Fruits" />
                  <Picker.Item label="Dried Fruits" value="Dried Fruits" />
                  <Picker.Item label="Canned Fruits" value="Canned Fruits" />
                </Picker>
              </View>
            </View>

            <View style={[styles.formGroup, { flex: 1 }]}>
              <Text style={styles.label}>Quantity</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <View style={styles.quantityInputContainer}>
                  <Text style={styles.quantityText}>{quantity}</Text>
                </View>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => setQuantity(quantity + 1)}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Food Description</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Enter the food details (e.g., Gala Apples, Mandarin Oranges)"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Expiry Date (If applicable)</Text>
            <TouchableOpacity
              style={styles.dateInput}
              onPress={() => setShowExpiryDatePicker(true)}
            >
              <Ionicons
                name="calendar-outline"
                size={20}
                color="#aaa"
                style={styles.dateIcon}
              />
              <Text style={styles.dateText}>
                {expiryDate ? formatDate(expiryDate) : "Choose Date"}
              </Text>
            </TouchableOpacity>
            {showExpiryDatePicker && (
              <DateTimePicker
                value={expiryDate || new Date()}
                mode="date"
                display="default"
                onChange={handleExpiryDateChange}
              />
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Preferred Pickup Schedule</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.dateInput, { flex: 1, marginRight: 10 }]}
                onPress={() => setShowPickupDatePicker(true)}
              >
                <Ionicons
                  name="calendar-outline"
                  size={20}
                  color="#aaa"
                  style={styles.dateIcon}
                />
                <Text style={styles.dateText}>
                  {pickupDate ? formatDate(pickupDate) : "Choose Date"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.dateInput, { flex: 1 }]}
                onPress={() => setShowPickupTimePicker(true)}
              >
                <Ionicons
                  name="time-outline"
                  size={20}
                  color="#aaa"
                  style={styles.dateIcon}
                />
                <Text style={styles.dateText}>
                  {pickupTime ? formatTime(pickupTime) : "Time"}
                </Text>
              </TouchableOpacity>
            </View>
            {showPickupDatePicker && (
              <DateTimePicker
                value={pickupDate || new Date()}
                mode="date"
                display="default"
                onChange={handlePickupDateChange}
              />
            )}
            {showPickupTimePicker && (
              <DateTimePicker
                value={pickupTime || new Date()}
                mode="time"
                display="default"
                onChange={handlePickupTimeChange}
              />
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Photos</Text>
            <TouchableOpacity style={styles.photoUpload}>
              <Ionicons name="add" size={24} color="#0C9B49" />
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setQualityAssurance(!qualityAssurance)}
            >
              {qualityAssurance && (
                <Ionicons name="checkmark-circle" size={24} color="#0C9B49" />
              )}
              {!qualityAssurance && <View style={styles.emptyCheckbox} />}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>
              I assure that food quality and hygiene has maintained
            </Text>
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  emptySpace: {
    width: 24,
  },
  formContainer: {
    flex: 1,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    overflow: "hidden",
  },
  picker: {
    height: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#0C9B49",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 20,
    color: "#0C9B49",
  },
  quantityInputContainer: {
    flex: 1,
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
    height: 80,
    textAlignVertical: "top",
  },
  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
  },
  dateIcon: {
    marginRight: 8,
  },
  dateText: {
    color: "#999",
  },
  photoUpload: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#0C9B49",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 8,
  },
  emptyCheckbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#0C9B49",
    borderRadius: 12,
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  submitButton: {
    backgroundColor: "#0C9B49",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default FoodDonationForm;
