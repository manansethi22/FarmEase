import { StyleSheet, Text, View, TextInput,Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const height_proportion = "30%";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign
        name="arrowleft"
        size={28}
        color="black"
        style={{ marginTop: 20,marginLeft:10 }}
      />
      </TouchableOpacity>
      

       <Image
        
        source={{
          uri: 'https://www.theindiaforum.in/sites/default/files/field/image/2022/06/21/ramkumar-radhakrishnan-wikimedia-1622193304-1622193304.jpeg'
        }}
        style={{ height: height_proportion,marginTop:20 }}
      />
     

      <Text style={styles.headText}>Welcome Back</Text>

     
      
      <View style={[styles.container1,{marginTop:30}]}>
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
        <Text style={styles.headText1}>Forgot password?</Text>
      <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: "#29C229",
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
            marginHorizontal:20,
            opacity:0.8
          }}
          onPress={() => navigation.navigate("BottomNavBar")}
        >
          <Text style={{ fontSize: 20, fontWeight: 500 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginHorizontal:20
          }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ fontSize: 20, fontWeight: 600 ,textDecorationLine: 'underline'}}>New User Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  headText: {
    fontSize: 28,
    fontWeight: "600",
    
    marginHorizontal: 20,
    marginTop:20,
    color:'#024002'
   
  },
  headText1: {
    fontSize: 16,
    fontWeight: "400",
    color:'#668566',
    marginHorizontal:20,
    
    marginTop: 20,
  },
  input: {
    height: 55,
    backgroundColor: "#E5EFE2",
    borderRadius: 15,
    marginTop: 25,
    padding:15
  },
  container1: {
    borderWidth: 1.5,
    borderColor: "#E9E9E9",
    height: 55,
    backgroundColor: "#E5EFE2",
    borderRadius: 15,
    marginTop: 20,
    padding: 12,
   marginHorizontal:20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    marginRight: 15,
  },
});
