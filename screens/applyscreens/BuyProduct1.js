import React from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const BuyProduct1 = ({ route, navigation }) => {
  const { data } = route.params;

  const openWhatsApp = () => {
    const phoneNumber = "9810323242"; // Replace with your phone number
    const message = `I'm interested in buying ${data.name}.`;
    // Construct the WhatsApp URL with phone number and message
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp with the specified URL
    Linking.openURL(url)
      .then(() => {
        console.log("WhatsApp opened successfully");
      })
      .catch((err) => {
        console.error("Error opening WhatsApp:", err);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={28}
          color="black"
          style={{ marginTop: 0 }}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: data.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.name2}>MRP </Text>
          <Text style={styles.price}>₹ {data.price} </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.name2}>Product of Origin: </Text>
          <Text style={styles.price}> India</Text>
        </View>

        <Text style={styles.name2}>Description </Text>

        <Text style={styles.description}>{data.description}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
        <Text style={styles.buttonText}>Buy or Rent</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  name2: {
    fontSize: 20,
    fontWeight: "500",
    // alignSelf: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    // textAlign: "center",
  },
  price: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    position: "absolute",
    bottom: -65,
    left: 20,
    right: 20,
    backgroundColor: "green",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 120,

  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  detailsContainer: {
    backgroundColor: "#F0FFF0", // very light green
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
});

export default BuyProduct1;
