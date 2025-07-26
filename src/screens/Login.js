import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../assets/scaling/scaling';
import { colors, routes } from '../constants';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation=useNavigation()
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Image
          source={require("../assets/images/crystal.png")} 
          style={styles.logo}
          resizeMode="contain"
        />

        <TextInput
          placeholder="Username"
          placeholderTextColor="#666"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity
        
        onPress={()=>{
navigation.navigate(routes.HOME)
        }}
        
        style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:horizontalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: horizontalScale(250),
    height: verticalScale(120),
    marginBottom: verticalScale(50),
  },
  input: {
    width: '100%',
    height: verticalScale(48),
    borderColor: '#ccc',
    borderWidth: horizontalScale(1),
    borderRadius: horizontalScale(8),
    paddingHorizontal: horizontalScale(12),
    fontSize:scaleFontSize(16),
    marginBottom: verticalScale(16),
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor:colors.light_bgBtn, // golden yellow
    width: '100%',
    height:verticalScale(48),
    borderRadius: horizontalScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:verticalScale(8),
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:scaleFontSize(16),
  },
  forgot: {
    color: '#000',
    fontSize: scaleFontSize(14),
    marginTop: verticalScale(16),
  },
});
