import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Svg, { Path, Circle, G } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const KyndKartLogo = () => (
  <Svg width={100} height={100} viewBox="0 0 100 100">
    <G>
      {/* Rounded square background */}
      <Path
        d="M20,0 L80,0 C90,0 100,10 100,20 L100,80 C100,90 90,100 80,100 L20,100 C10,100 0,90 0,80 L0,20 C0,10 10,0 20,0 Z"
        fill="#2e7d32"
      />
      
      {/* Inner rounded square */}
      <Path
        d="M25,5 L75,5 C85,5 95,15 95,25 L95,75 C95,85 85,95 75,95 L25,95 C15,95 5,85 5,75 L5,25 C5,15 15,5 25,5 Z"
        fill="#388e3c"
      />
      
      {/* Leaf */}
      <Path
        d="M30,30 Q20,50 30,70 Q40,50 30,30 Z"
        fill="#ffffff"
        strokeWidth="1"
      />
      
      {/* Fork */}
      <Path
        d="M45,30 L45,70 M40,30 L40,45 M50,30 L50,45"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Spoon */}
      <Circle cx="60" cy="35" r="5" fill="#ffffff" />
      <Path
        d="M60,40 L60,70"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Recycling arrows */}
      <Path
        d="M25,65 Q50,85 75,65 M75,65 L70,60 M75,65 L70,70"
        stroke="#ffffff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </G>
  </Svg>
);

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topCurve} />
      <View style={styles.bottomCurve} />
      
      <View style={styles.content}>
        <KyndKartLogo />
        <Text style={styles.title}>KyndKart</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topCurve: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.7,
    backgroundColor: '#e8f5e9',
    transform: [{ translateX: -width * 0.3 }, { translateY: -width * 0.3 }],
  },
  bottomCurve: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: width * 0.9,
    backgroundColor: '#e8f5e9',
    transform: [{ translateX: width * 0.4 }, { translateY: width * 0.4 }],
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#388e3c',
    marginTop: 20,
  },
});

export default SplashScreen;