import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import Login from '../screens/authScreens/Login';
import Register from '../screens/authScreens/Register';
import BottomNavBar from '../components/BottomNavBar';

const Stack = createStackNavigator();

const AppNavigator = () => {
  
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='BottomNavBar' component={BottomNavBar}/>
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})