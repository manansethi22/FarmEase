import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomePage from '../screens/HomePage';
import JobsScreen from '../screens/JobsScreen';
import Marketplace from '../screens/Marketplace';
import PostJob from '../screens/PostJob';
const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
    return (
        
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Jobs') {
              iconName = 'briefcase';
            } 
            else if (route.name === 'Post Job') {
                iconName = 'add-circle';
              }
              else if (route.name === 'Marketplace') {
              iconName = 'cart';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#f0f8f7', 
            height: 70,
            
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 10, 
          },
          tabBarIconStyle: {
            marginBottom: -10, // Decrease the gap between icon and label
          },
          headerShown: false, 
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Jobs" component={JobsScreen} />
        <Tab.Screen name="Post Job" component={PostJob} />
        <Tab.Screen name="Marketplace" component={Marketplace} />
      </Tab.Navigator>
    
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default BottomNavBar;
