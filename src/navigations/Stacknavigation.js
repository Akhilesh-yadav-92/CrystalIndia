import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { routes } from '../constants';
const Stack = createNativeStackNavigator();
const Stacknavigation = () => {
  return (
     <Stack.Navigator
      screenOptions={{
        headerShown: false, // 🔥 Hide header for all screens
      }}
     >
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.HOME} component={Home} />
    </Stack.Navigator>
  )
}

export default Stacknavigation

const styles = StyleSheet.create({})