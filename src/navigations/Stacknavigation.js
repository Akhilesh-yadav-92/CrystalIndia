import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { routes } from '../constants';
import AddCustomer from '../screens/AddCustomer';
import AddItems from '../screens/AddItems';
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
        <Stack.Screen name={routes.ADD_CUSTOMER} component={AddCustomer} />
        <Stack.Screen name={routes.ADD_ITEMS} component={AddItems} />
    </Stack.Navigator>
  )
}

export default Stacknavigation

const styles = StyleSheet.create({})