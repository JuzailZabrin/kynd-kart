import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Svg, { Path, Circle, G } from 'react-native-svg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

// Define the navigation types
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const KyndKartLogo = () => (
  <Svg width={80} height={80} viewBox="0 0 100 100">
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

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here
    console.log('Login attempted with:', email);
  };

  const handleRegister = () => {
    // Navigate to registration screen
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen
    navigation.navigate('ForgotPassword');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topCurve} />
      <View style={styles.bottomCurve} />
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <KyndKartLogo />
        </View>
        
        <Text style={styles.title}>Login To Your Account</Text>
        
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            placeholderTextColor="#A0A0A0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A0A0A0"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TouchableOpacity 
            style={styles.forgotPasswordContainer}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.signInButton}
            onPress={handleLogin}
          >
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
          
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.divider} />
          </View>
          
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account yet? </Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    zIndex: -1,
  },
  bottomCurve: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.7,
    backgroundColor: '#e8f5e9',
    transform: [{ translateX: width * 0.3 }, { translateY: width * 0.3 }],
    zIndex: -1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388e3c',
    textAlign: 'center',
    marginBottom: 40,
  },
  formContainer: {
    width: '100%',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#000000',
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#000000',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#388e3c',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    paddingHorizontal: 16,
    color: '#666666',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  registerText: {
    color: '#333333',
    fontSize: 14,
  },
  registerLink: {
    color: '#388e3c',
    fontSize: 14,
    fontWeight: '600',
  }
});

export default LoginScreen;