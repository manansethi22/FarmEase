import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, TextInput } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppNavigator from "./navigations/AppNavigator";


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <PaperProvider>
        
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
         
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
