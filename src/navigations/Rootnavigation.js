import { View, Text } from 'react-native'
import React from 'react'
 import { NavigationContainer } from '@react-navigation/native';
import Stacknavigation from './Stacknavigation';
const Rootnavigation = () => {
  return (
  <NavigationContainer>
    <Stacknavigation/>
  </NavigationContainer>
  )
}

export default Rootnavigation