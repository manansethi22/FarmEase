import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/authScreens/WelcomeScreen";
import Login from "../screens/authScreens/Login";
import Register from "../screens/authScreens/Register";
import BottomNavBar from "../components/BottomNavBar";
import JobsScreen from "../screens/JobsScreen";
import Seeds from "../screens/marketplace/Seeds";
import Fertilizers from "../screens/marketplace/Fertilizers";
import Tools from "../screens/marketplace/Tools";
import Plants from "../screens/marketplace/Plants";
import WebView1 from "../screens/WebView";
import Tractors from "../screens/marketplace/Tractor";
import Threshers from "../screens/marketplace/Thresher";
import Cultivators from "../screens/marketplace/Cultivator";
import Drones from "../screens/marketplace/Drone";
import PostJobs from "../screens/PostJob";
import PostJob1 from "../screens/PostJob1";
import BuyProduct from "../screens/applyscreens/BuyProduct";
import BuyProduct1 from "../screens/applyscreens/BuyProduct1";
import HarvestingJobs from "../screens/jobscreen/HarverstingJob";
import JobPage from "../screens/applyscreens/JobPage";


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
        <Stack.Screen name="Jobscreen" component={JobsScreen} />
        <Stack.Screen name="Seeds" component={Seeds} />
        <Stack.Screen name="Fertilizers" component={Fertilizers} />
        <Stack.Screen name="Tools" component={Tools} />
        <Stack.Screen name="Plants" component={Plants} />
        <Stack.Screen name="WebView1" component={WebView1} />
        <Stack.Screen name="Tractor" component={Tractors} />
        <Stack.Screen name="Thresher" component={Threshers} />
        <Stack.Screen name="Cultivator" component={Cultivators} />
        <Stack.Screen name="Harvesting" component={HarvestingJobs} />
        <Stack.Screen name="Drone" component={Drones} />

        <Stack.Screen name="Postjob1" component={PostJob1} />
        <Stack.Screen name="Postjob" component={PostJobs} />
        <Stack.Screen
          name="BuyProduct"
          component={BuyProduct}
          options={{ headerShown: false }}
          initialParams={{ data: null }}
        />
         <Stack.Screen
          name="BuyProduct1"
          component={BuyProduct1}
          options={{ headerShown: false }}
          initialParams={{ data: null }}
        />
        <Stack.Screen
          name="JobPage"
          component={JobPage}
          options={{ headerShown: false }}
          initialParams={{ data: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
