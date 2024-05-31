import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ChangeFirstPassScreen from '../screens/ChangeFirstPassScreen';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ChangeFirstPassScreen" component={ChangeFirstPassScreen} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})