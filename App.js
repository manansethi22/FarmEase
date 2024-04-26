import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, TextInput } from "react-native-paper";

import WelcomeScreen from "./screens/authScreens/WelcomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Login from "./screens/authScreens/Login";
import Register from "./screens/authScreens/Register";
import BottomNavBar from "./components/BottomNavBar";
import AppNavigator from "./navigations/AppNavigator";


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          {/* <WelcomeScreen /> */}
          {/* <Login/> */}
          {/* <Register/> */}
          {/* <BottomNavBar/> */}
          <AppNavigator/>
         
          
        </SafeAreaView>
      </PaperProvider>
      </GestureHandlerRootView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
