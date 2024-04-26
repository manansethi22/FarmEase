import { StyleSheet, Text, View, Image, FlatList, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const WIDTH = Dimensions.get("window").width;

const plantsData = [
  {
      id: '1',
      name: 'Tomato Plant',
      description: 'Tomato plants produce juicy and flavorful tomatoes. They require full sun and well-drained soil to thrive.',
      price: '50.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYG8ud56KZtDk1FwQVafO1pDeEhDCf6ASu0w&s'
    },
    {
      id: '2',
      name: 'Chilli Plant',
      description: 'Chilli plants produce spicy peppers that are used in various culinary dishes. They prefer warm climates and require regular watering.',
      price: '40.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFbqw-hMIoGb07WYXOu9V_pgt6kzUH57mRQ&s'
    },
    {
      id: '3',
      name: 'Spinach Plant',
      description: 'Spinach plants produce nutritious dark green leaves that are rich in vitamins and minerals. They thrive in cool weather and moist soil.',
      price: '30.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_jqPupKCvYh75L2RhK9uH8bU0irpYilJfw&s'
    },
    {
      id: '4',
      name: 'Brinjal Plant',
      description: 'Brinjal plants produce egg-shaped fruits that are commonly used in Indian cooking. They require well-drained soil and ample sunlight.',
      price: '60.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSa3GqU1hQqPj3YA61burYN3dyS8OArjXR_w&s'
    },
    {
      id: '5',
      name: 'Cucumber Plant',
      description: 'Cucumber plants produce crisp and refreshing fruits that are commonly used in salads and pickles. They require plenty of sunlight and regular watering.',
      price: '35.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThUJIZms3w_sRwEbohAhc8AD24XnPU4kdZw&s'
    },
    {
      id: '6',
      name: 'Ladyfinger Plant',
      description: 'Ladyfinger plants produce slender green pods that are a popular vegetable in Indian cuisine. They thrive in warm climates and well-drained soil.',
      price: '45.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolyLWScPMzmjq6ewlQlsyHHDsm_msS_prOQ&s'
    },
    {
      id: '7',
      name: 'Capsicum Plant',
      description: 'Capsicum plants produce bell peppers in various colors, including red, green, and yellow. They require ample sunlight and regular watering.',
      price: '55.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uUdreDPSdJylvbw6IvjAGxjTCSpvC28ipw&s'
    },
    {
      id: '8',
      name: 'Coriander Plant',
      description: 'Coriander plants produce aromatic leaves and seeds that are widely used as a seasoning in Indian cooking. They prefer well-drained soil and partial shade.',
      price: '25.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dfNM-3TQPlCcSXXt251P664ijuaMgZFk-A&s'
    },
];


const PlantCard = ({ image, name, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.plantImage} resizeMode="contain" />
      <Text style={styles.plantName}>{name}</Text>
      <Text style={styles.plantPrice}>₹ {price}</Text>
    </View>
  );
};

const Plants = ({ navigation }) => {
  const renderPlantItem = ({ item }) => (
    <Pressable
      // onPress={() =>
      //   navigation.navigate("ProductScreen", {
      //     name: item.name,
      //   })
      // }
    >
      <PlantCard
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

      <Text style={styles.headText}>Plants</Text>
      <FlatList
        data={plantsData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
        renderItem={renderPlantItem}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </View>
  );
};

export default Plants;

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
  plantImage: {
    width: 120,
    height: 120,
  },
  plantName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  plantPrice: {
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