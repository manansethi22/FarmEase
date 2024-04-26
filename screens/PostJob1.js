import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const PostJob1 = () => {
    const navigation = useNavigation();
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

      <Text style={styles.headText}>Create a Job</Text>

      
      
      
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="vcard-o"
            size={22}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="Title"  />
        </View>
      </View>
      
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="money"
            size={22}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="Pay per hour"  />
        </View>
      </View>
      <View style={[styles.container1,{height: 100}]}>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="wpforms"
            size={22}
            color="black"
            style={styles.image}
          />
          <TextInput placeholder="Description"  />
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
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: "#A4CE7A",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
          opacity: 0.8,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Post Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostJob1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
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
    fontSize: 16,
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
    backgroundColor: "#F2F5F2",
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
