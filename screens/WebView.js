import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const WebView1 = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={28}
          color="black"
          style={{ marginTop:0,marginLeft: 20}}
        />
      </TouchableOpacity>

      <WebView
        source={{
          uri: `https://farmease-frontend.vercel.app/chat`,
        }}
      />
    </View>
  );
};

export default WebView1;

const styles = StyleSheet.create({
  backBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    width: 45,
    height: 45,
    borderRadius: 33,
    position: "absolute",
    top: 20, // Adjust as needed
    left: 20, // Adjust as needed
    zIndex: 1,
  },
  btnContainer: {
    backgroundColor: "transparent",
  },
  backBtnImage: {
    width: 13,
    height: 19,
    marginRight: 3,
  },
});
