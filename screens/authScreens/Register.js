import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign
        name="arrowleft"
        size={28}
        color="black"
        style={{ marginTop: 20 }}
      />
      </TouchableOpacity>

      <Text style={styles.headText}>Registration Form</Text>

      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="user"
            size={24}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="Name" />
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="envelope"
            size={20}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="Email" />
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="lock"
            size={24}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="vcard-o"
            size={22}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="Aadhar-Number" secureTextEntry={true} />
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="phone"
            size={22}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="Phone-Number" />
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="map-marker"
            size={24}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="State" />
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="home"
            size={23}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="City/Town" />
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 0, alignItems: "center" }}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
          color={"#29C229"}
        />
        <Text style={styles.headText2}>
          I agree with all the terms and conditions.   
        </Text>
        <FontAwesome name="info-circle" size={18} color="green" />
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: "#29C229",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
          opacity:0.8
        }}
        onPress={() => navigation.navigate("BottomNavBar")}
      >
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,

          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            textDecorationLine: "underline",
          }}
        >
          Already have an account! Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headText: {
    fontSize: 28,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  headText1: {
    fontSize: 16,
    fontWeight: "400",
    color: "#668566",

    marginTop: 25,
  },
  headText2: {
    fontSize: 15,
    fontWeight: "400",
    color: "#668566",
  },
  input: {
    height: 55,
    backgroundColor: "#E5EFE2",
    borderRadius: 15,
    // marginTop: 25,
    padding: 15,
  },
  container1: {
    borderWidth: 1.5,
    borderColor: "#E9E9E9",
    height: 55,
    backgroundColor: "#E5EFE2",
    borderRadius: 15,
    marginTop: 20,
    padding: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    marginRight: 15,
  },
});
