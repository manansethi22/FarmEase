import { StyleSheet, Text, View, Image, FlatList, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const WIDTH = Dimensions.get("window").width;

const dronesData = [
    {
      id: '1',
      name: 'AgriDrone 2000',
      description: 'The AgriDrone 2000 is equipped with advanced sensors and imaging technology to monitor crop health, assess soil conditions, and detect pests and diseases. It offers precision agriculture solutions for increased yields and reduced inputs.',
      price: '2500',
      image: 'https://dummyimage.com/200x200/000/fff&text=Drone+Image'
    },
    {
      id: '2',
      name: 'CropScout Pro',
      description: 'The CropScout Pro drone is designed for scouting and monitoring agricultural fields with high-resolution aerial imagery. It provides farmers with valuable insights into crop health, irrigation, and pest infestations.',
      price: '1800',
      image: 'https://dummyimage.com/200x200/000/fff&text=Drone+Image'
    },
    {
      id: '3',
      name: 'AgriEye 5000',
      description: 'The AgriEye 5000 drone offers multispectral imaging capabilities to assess crop health, optimize fertilizer application, and identify areas of stress or nutrient deficiency. It helps farmers make data-driven decisions for improved crop management.',
      price: '3000',
      image: 'https://dummyimage.com/200x200/000/fff&text=Drone+Image'
    },
    {
      id: '4',
      name: 'FarmGuardian',
      description: 'The FarmGuardian drone provides real-time monitoring of farms for early detection of crop diseases, weeds, and nutrient deficiencies. It assists farmers in implementing timely interventions and reducing yield losses.',
      price: '2200',
      image: 'https://dummyimage.com/200x200/000/fff&text=Drone+Image'
    },
    {
      id: '5',
      name: 'AgriDrone X-10',
      description: 'The AgriDrone X-10 is a rugged and reliable drone equipped with thermal imaging and NDVI cameras for crop health assessment, irrigation planning, and yield prediction. It is suitable for large-scale farming operations.',
      price: '3500',
      image: 'https://dummyimage.com/200x200/000/fff&text=Drone+Image'
    },
  ];
  

const DroneCard = ({ image, name, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.droneImage} resizeMode="contain" />
      <Text style={styles.droneName}>{name}</Text>
      <Text style={styles.dronePrice}>₹ {price} /Day</Text>
    </View>
  );
};

const Drones = ({ navigation }) => {
  const renderDroneItem = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.navigate("ProductScreen", {
          name: item.name,
        })
      }
    >
      <DroneCard
        image={item.image}
        name={item.name}
        price={item.price}
      />
    </Pressable>
  );

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

      <Text style={styles.headText}>Drones</Text>
      <FlatList
        data={dronesData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
        renderItem={renderDroneItem}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </View>
  );
};

export default Drones;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  card: {
    width: (WIDTH - 50) / 2,
    height: 235,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    padding: 12,
    borderRadius: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "green",
  },
  droneImage: {
    width: 120,
    height: 120,
  },
  droneName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  dronePrice: {
    fontSize: 14,
    marginTop: 5,
  },
  headText: {
    fontSize: 28,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: -35,
    marginBottom: 50,
  },
});