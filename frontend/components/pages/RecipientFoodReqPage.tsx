import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Modal,
  FlatList
} from 'react-native';

const FoodDonationForm = () => {
  const [foodItems, setFoodItems] = useState('');
  const [fruitType, setFruitType] = useState('Fresh Fruits');
  const [showFruitTypeModal, setShowFruitTypeModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');
  
  // Date and time state
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  
  // Fruit type options
  const fruitTypeOptions = [
    'Fresh Fruits',
    'Dried Fruits',
    'Canned Fruits',
    'Frozen Fruits'
  ];

  // Date picker values
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const generateDays = () => {
    return Array.from({length: 31}, (_, i) => i + 1);
  };
  
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({length: 10}, (_, i) => currentYear + i);
  };
  
  // Time picker values
  const hours = Array.from({length: 12}, (_, i) => i + 1);
  const minutes = Array.from({length: 60}, (_, i) => i);
  const periods = ['AM', 'PM'];
  
  const [dateSelection, setDateSelection] = useState({
    month: months[new Date().getMonth()],
    day: new Date().getDate(),
    year: new Date().getFullYear()
  });
  
  const [timeSelection, setTimeSelection] = useState({
    hour: new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours() === 0 ? 12 : new Date().getHours(),
    minute: new Date().getMinutes(),
    period: new Date().getHours() >= 12 ? 'PM' : 'AM'
  });

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const confirmDateSelection = () => {
    const formattedDate = `${dateSelection.month.substring(0, 3)} ${dateSelection.day}, ${dateSelection.year}`;
    setSelectedDate(formattedDate);
    setShowDateModal(false);
  };

  const confirmTimeSelection = () => {
    const formattedMinute = timeSelection.minute < 10 ? `0${timeSelection.minute}` : timeSelection.minute;
    const formattedTime = `${timeSelection.hour}:${formattedMinute} ${timeSelection.period}`;
    setSelectedTime(formattedTime);
    setShowTimeModal(false);
  };

  // Back arrow icon component
  const BackArrow = () => (
    <Text style={{ fontSize: 24 }}>←</Text>
  );
  
  // Calendar icon component
  const CalendarIcon = () => (
    <Text style={{ fontSize: 20 }}>📅</Text>
  );
  
  // Clock icon component
  const ClockIcon = () => (
    <Text style={{ fontSize: 20 }}>🕒</Text>
  );
  
  // Dropdown icon component
  const DropdownIcon = () => (
    <Text style={{ fontSize: 16 }}>▼</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Food Item(s)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Apples, Oranges, Bananas"
            value={foodItems}
            onChangeText={setFoodItems}
          />

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Type of Fruit</Text>
              <TouchableOpacity 
                style={styles.pickerButton} 
                onPress={() => setShowFruitTypeModal(true)}
              >
                <Text>{fruitType}</Text>
                <DropdownIcon />
              </TouchableOpacity>
            </View>

            <View style={styles.column}>
              <Text style={styles.label}>Quantity</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity 
                  style={styles.quantityButton}
                  onPress={() => handleQuantityChange('decrease')}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <View style={styles.quantityValue}>
                  <Text>{quantity}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.quantityButton}
                  onPress={() => handleQuantityChange('increase')}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.label}>Food Description</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter the food details\n(e.g., Gala Apples, Mandarin Oranges)"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          <Text style={styles.label}>Preferred Pickup Schedule</Text>
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.dateTimeButton}
              onPress={() => setShowDateModal(true)}
            >
              <CalendarIcon />
              <Text style={styles.dateTimeButtonText}>
                {selectedDate || "Choose Date"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.dateTimeButton}
              onPress={() => setShowTimeModal(true)}
            >
              <ClockIcon />
              <Text style={styles.dateTimeButtonText}>
                {selectedTime || "Time"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fruit Type Modal */}
      <Modal
        visible={showFruitTypeModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Fruit Type</Text>
            <FlatList
              data={fruitTypeOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.optionItem,
                    fruitType === item && styles.selectedOption
                  ]}
                  onPress={() => {
                    setFruitType(item);
                    setShowFruitTypeModal(false);
                  }}
                >
                  <Text style={fruitType === item ? styles.selectedOptionText : null}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              style={styles.optionsList}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowFruitTypeModal(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Date Modal */}
      <Modal
        visible={showDateModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Date</Text>
            
            <View style={styles.datePickerContainer}>
              <View style={styles.datePickerColumn}>
                <Text style={styles.datePickerLabel}>Month</Text>
                <FlatList
                  data={months}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.datePickerItem,
                        dateSelection.month === item && styles.selectedDateItem
                      ]}
                      onPress={() => setDateSelection({...dateSelection, month: item})}
                    >
                      <Text style={dateSelection.month === item ? styles.selectedDateText : null}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  style={styles.datePickerList}
                />
              </View>
              
              <View style={styles.datePickerColumn}>
                <Text style={styles.datePickerLabel}>Day</Text>
                <FlatList
                  data={generateDays()}
                  keyExtractor={(item) => item.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.datePickerItem,
                        dateSelection.day === item && styles.selectedDateItem
                      ]}
                      onPress={() => setDateSelection({...dateSelection, day: item})}
                    >
                      <Text style={dateSelection.day === item ? styles.selectedDateText : null}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  style={styles.datePickerList}
                />
              </View>
              
              <View style={styles.datePickerColumn}>
                <Text style={styles.datePickerLabel}>Year</Text>
                <FlatList
                  data={generateYears()}
                  keyExtractor={(item) => item.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.datePickerItem,
                        dateSelection.year === item && styles.selectedDateItem
                      ]}
                      onPress={() => setDateSelection({...dateSelection, year: item})}
                    >
                      <Text style={dateSelection.year === item ? styles.selectedDateText : null}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  style={styles.datePickerList}
                />
              </View>
            </View>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowDateModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={confirmDateSelection}
              >
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Time Modal */}
      <Modal
        visible={showTimeModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Time</Text>
            
            <View style={styles.timePickerContainer}>
              <View style={styles.timePickerColumn}>
                <Text style={styles.timePickerLabel}>Hour</Text>
                <FlatList
                  data={hours}
                  keyExtractor={(item) => item.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.timePickerItem,
                        timeSelection.hour === item && styles.selectedTimeItem
                      ]}
                      onPress={() => setTimeSelection({...timeSelection, hour: item})}
                    >
                      <Text style={timeSelection.hour === item ? styles.selectedTimeText : null}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  style={styles.timePickerList}
                />
              </View>
              
              <View style={styles.timePickerColumn}>
                <Text style={styles.timePickerLabel}>Minute</Text>
                <FlatList
                  data={minutes}
                  keyExtractor={(item) => item.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.timePickerItem,
                        timeSelection.minute === item && styles.selectedTimeItem
                      ]}
                      onPress={() => setTimeSelection({...timeSelection, minute: item})}
                    >
                      <Text style={timeSelection.minute === item ? styles.selectedTimeText : null}>
                        {item < 10 ? `0${item}` : item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  style={styles.timePickerList}
                />
              </View>
              
              <View style={styles.timePickerColumn}>
                <Text style={styles.timePickerLabel}>AM/PM</Text>
                <FlatList
                  data={periods}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.timePickerItem,
                        timeSelection.period === item && styles.selectedTimeItem
                      ]}
                      onPress={() => setTimeSelection({...timeSelection, period: item})}
                    >
                      <Text style={timeSelection.period === item ? styles.selectedTimeText : null}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  style={styles.timePickerList}
                />
              </View>
            </View>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowTimeModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={confirmTimeSelection}
              >
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  formContainer: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  column: {
    flex: 1,
    marginRight: 8,
  },
  pickerButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    height: 50,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  quantityButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityValue: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    height: 80,
    textAlignVertical: 'top',
    marginBottom: 8,
  },
  dateTimeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
  },
  dateTimeButtonText: {
    marginLeft: 8,
    color: '#888',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsList: {
    maxHeight: 200,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedOption: {
    backgroundColor: '#e7f3e8',
  },
  selectedOptionText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#333',
  },
  // Date picker styles
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  datePickerColumn: {
    flex: 1,
    alignItems: 'center',
  },
  datePickerLabel: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  datePickerList: {
    height: 150,
    width: '100%',
  },
  datePickerItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  selectedDateItem: {
    backgroundColor: '#e7f3e8',
    borderRadius: 4,
  },
  selectedDateText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  // Time picker styles
  timePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timePickerColumn: {
    flex: 1,
    alignItems: 'center',
  },
  timePickerLabel: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  timePickerList: {
    height: 150,
    width: '100%',
  },
  timePickerItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  selectedTimeItem: {
    backgroundColor: '#e7f3e8',
    borderRadius: 4,
  },
  selectedTimeText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
  },
  cancelButtonText: {
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FoodDonationForm;