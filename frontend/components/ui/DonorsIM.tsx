import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface MessageItemProps {
  name: string;
  message: string;
  time: string;
  isRead: string;
  messageCount: number;
}

const MessageItem: React.FC<MessageItemProps> = ({ name, message, time, isRead, messageCount }) => {
    return (
      <TouchableOpacity style={styles.messageItem}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.avatar}
        />
        <View style={styles.messageContent}>
          <View style={styles.messageHeader}>
            <Text style={styles.senderName}>{name}</Text>
            <Text style={styles.messageTime}>{time}</Text>
          </View>
          <View style={styles.messagePreviewContainer}>
            <View style={styles.previewWithIcon}>
              {message === "Have a good one!" && isRead === "green" && (
                <MaterialCommunityIcons name="check-all" size={16} color="#4CAF50" style={styles.checkIcon} />
              )}
              {message === "Have a good one!" && isRead === "gray" && (
                <MaterialCommunityIcons name="check-all" size={16} color="#999" style={styles.checkIcon} />
              )}
              {message === "Have a good one!" && isRead === "normal" && (
                <Ionicons name="checkmark" size={16} color="#999" style={styles.checkIcon} />
              )}
              <Text style={styles.messagePreview} numberOfLines={1}>{message}</Text>
            </View>
            {messageCount > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadCount}>{messageCount}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  const MessagesScreen = () => {
    const messages = [
      {
        id: '1',
        name: 'Smile Foundation',
        message: 'Have a good one!',
        time: '3:02 PM',
        isRead: 'green',
        messageCount: 0
      },
      {
        id: '2',
        name: 'Smile Foundation',
        message: 'Have a good one!',
        time: '3:02 PM',
        isRead: 'gray',
        messageCount: 0
      },
      {
        id: '3',
        name: 'Smile Foundation',
        message: 'Have a good one!',
        time: '3:02 PM',
        isRead: 'normal',
        messageCount: 0
      },
      {
        id: '4',
        name: 'Smile Foundation',
        message: 'Thank you for your donation',
        time: '3:02 PM',
        isRead: 'normal',
        messageCount: 2
      }
    ];

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Messages</Text>
            <TouchableOpacity style={styles.notificationButton}>
              <Ionicons name="notifications" size={24} color="#4CAF50" />
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationCount}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
    
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#999"
            />
          </View>
    
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MessageItem
                name={item.name}
                message={item.message}
                time={item.time}
                isRead={item.isRead}
                messageCount={item.messageCount}
              />
            )}
            contentContainerStyle={styles.messagesList}
          />
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
          paddingVertical: 12,
        },
        backButton: {
          padding: 4,
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        notificationButton: {
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
        searchContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 25,
          marginHorizontal: 16,
          marginVertical: 12,
          paddingHorizontal: 16,
          height: 50,
        },
        searchIcon: {
          marginRight: 10,
        },
        searchInput: {
          flex: 1,
          fontSize: 16,
          color: '#333',
        },
        messagesList: {
          paddingHorizontal: 16,
        },
        messageItem: {
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 12,
          padding: 14,
          marginBottom: 12,
        },
        avatar: {
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#E0E0E0',
          marginRight: 12,
        },
        messageContent: {
          flex: 1,
        },
        messageHeader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 6,
        },
        senderName: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        messageTime: {
          fontSize: 14,
          color: '#666',
        },
        messagePreviewContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        previewWithIcon: {
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        },
        checkIcon: {
          marginRight: 4,
        },
        messagePreview: {
          fontSize: 14,
          color: '#888',
          flex: 1,
        },
        unreadBadge: {
          backgroundColor: '#4CAF50',
          borderRadius: 10,
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        },
        unreadCount: {
          color: 'white',
          fontSize: 12,
          fontWeight: 'bold',
        },
      });
      
      export default MessagesScreen;