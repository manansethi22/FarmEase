import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width;

const height_proportion = "40%";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../assets/farmer3.png")}
        style={{ height: height_proportion}} />

      <Text
        style={{
          fontSize: 24,
          fontWeight: 600,
          alignSelf: "center",
          marginTop: 15,
        }}
      >
        Welcome To FarmEase !
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 500,
          alignSelf: "center",
          marginTop: 5,
        }}
      >
        Your one-stop solution for farming needs.
      </Text>
      

      <View style={{ width: WIDTH,marginTop: 60, }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 600,
            alignSelf: "center",
           
          }}
        >
          Get Started
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#A4CE7A",
            borderRadius: 15,
            marginHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ fontSize: 20, fontWeight: 500 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#A4CE7A",
            borderRadius: 15,
            marginHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
          }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ fontSize: 20, fontWeight: 500 }}>SignUp</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        style={{
          height: 48,
          backgroundColor: "#29C229",
          borderRadius: 15,
          marginHorizontal: 80,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 90,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 500, }}>Choose Language</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
