import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import * as Localization from 'expo-localization';
import en from '../../locales/en.json';
import hi from '../../locales/hi.json';
import pu from '../../locales/pu.json';
// import i18n from '../../services/i18next.js';

const WIDTH = Dimensions.get("window").width;

const height_proportion = "20%";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [language, setLanguage] = useState("");

  // const selectLanguage = (lang) => {
  //   i18n.locale = lang; // Set the selected language using i18n
  //   setModalVisible(false);
  // };
  const selectLanguage = (lang) => {
    setLanguage(lang);
    setModalVisible(false);
  };


  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Image
        source={require("../../assets/farmer5.webp")}
        style={{
          height: height_proportion,
          alignSelf: "center",
          marginTop: 50,
        }}
        resizeMode="contain"
      />

      <Text
        style={{
          fontSize: 24,
          fontWeight: 600,
          alignSelf: "center",
          marginTop: 15,
        }}
      >
        Namaste !
      </Text>
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

      <View style={{ width: WIDTH, marginTop: 60 }}>
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
      <TouchableOpacity
        style={{
          height: 48,
          backgroundColor: "#29C229",
          borderRadius: 15,
          marginHorizontal: 80,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 90,
          flexDirection: "row",
          gap: 10,
        }}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="language" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Choose Language</Text>
      </TouchableOpacity>
      <Text style={styles.selectedLanguage}>
        Selected Language: {language}
      </Text>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
        <FontAwesome name="language" size={34} color="black" />

          <Text style={styles.modalText}>Select Language</Text>
          <Pressable
            style={styles.button}
            onPress={() => selectLanguage('English')}
          >
            <Text style={styles.buttonText}>English</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => selectLanguage('हिंदी')}
          >
            <Text style={styles.buttonText}>हिंदी</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => selectLanguage('ਪੰਜਾਬੀ')}
          >
            <Text style={styles.buttonText}>ਪੰਜਾਬੀ</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 200,

  },
  button: {
    marginVertical: 10,
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  selectedLanguage: {
    marginTop: 20,
    fontSize: 18,
    alignSelf: "center",
  },
});
