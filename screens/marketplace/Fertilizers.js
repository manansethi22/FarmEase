
  import { StyleSheet, Text, View, Image, FlatList, Pressable, Dimensions } from 'react-native';
  import React from 'react';
  import { AntDesign } from "@expo/vector-icons";
  import { TouchableOpacity } from "react-native-gesture-handler";
  
  const WIDTH = Dimensions.get("window").width;
  
  const fertilizerData = [
    {
      id: "1",
      name: "Organic Manure",
      price: "200.00 / 1 kg",
      description:
        "Organic Manure is a natural fertilizer made from plant or animal sources. It enriches the soil with essential nutrients and improves soil structure.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugCKjEsHIQcnI0aoOQWLksIh2ZCengEatWg&s",
    },
    {
      id: "2",
      name: "NPK Fertilizer",
      price: "150.00 / 1 kg",
      description:
        "NPK Fertilizer is a chemical fertilizer containing the primary nutrients nitrogen (N), phosphorus (P), and potassium (K). It promotes plant growth and improves crop yield.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlPGr72qdLDu-I9C4M5LBOHAdqqBCzcni5A&s",
    },
    {
      id: "3",
      name: "Compost",
      price: "100.00 / 1 kg",
      description:
        "Compost is a nutrient-rich organic matter that improves soil fertility and helps retain moisture. It is made from decomposed organic waste.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7Szr9MRmwfDC8_zLDCpFu6HrnSqQCwE3Gg&s",
    },
    {
      id: "4",
      name: "Vermicompost",
      price: "250.00 / 1 kg",
      description:
        "Vermicompost is a nutrient-rich organic fertilizer produced by composting organic matter using earthworms. It enhances soil health and promotes plant growth.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iLNt86vLtfGtp0dzfa26LQUN9-MuCoHMOQ&s",
    },
    {
      id: "5",
      name: "Bone Meal",
      price: "180.00 / 1 kg",
      description:
        "Bone Meal is a natural fertilizer made from ground animal bones. It is rich in phosphorus and helps improve root development and flowering in plants.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYoohGhehQD5_1WoDIIWjfU3oXqLp0n4XqPQ&s",
    },
    {
      id: "6",
      name: "Fish Emulsion",
      price: "220.00 / 1 kg",
      description:
        "Fish Emulsion is a liquid fertilizer made from fermented fish. It is rich in nutrients like nitrogen, phosphorus, and potassium, and provides quick nutrition to plants.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Fog_8_D0Yzd0kFX8yDoy3cpoNKS2WHQD7Q&s",
    },
    {
      id: "7",
      name: "Neem Cake",
      price: "120.00 / 1 kg",
      description:
        "Neem Cake is a byproduct obtained during the extraction of neem oil. It acts as an organic fertilizer and pest repellent, promoting healthy plant growth.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIzVhOqXTpZi_xr6-iPhFQhvFFpN2Z0yabA&s",
    },
    {
      id: "8",
      name: "Gypsum",
      price: "90.00 / 1 kg",
      description:
        "Gypsum is a natural mineral used as a soil conditioner and fertilizer. It improves soil structure, drainage, and nutrient uptake by plants.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8s4FbuZBI6yd3bXwqd_VBae1-Vn4vme_hgA&s",
    },
  ];

  
  
  const FertilizerCard = ({ image, name, price }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.fertilizerImage} resizeMode="contain" />
        <Text style={styles.fertilizerName}>{name}</Text>
        <Text style={styles.fertilizerPrice}>₹ {price}</Text>
      </View>
    );
  };
  
  const Fertilizers = ({ navigation }) => {
    const renderFertilizerItem = ({ item }) => (
      <Pressable
        // onPress={() =>
        //   navigation.navigate("ProductScreen", {
        //     name: item.name,
        //   })
        // }
      >
        <FertilizerCard
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
  
        <Text style={styles.headText}>Fertilizers</Text>
        <FlatList
          data={fertilizerData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
          renderItem={renderFertilizerItem}
          ListFooterComponent={<View style={{ height: 100 }} />}
        />
      </View>
    );
  };
  
  export default Fertilizers;
  
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
    fertilizerImage: {
      width: 120,
      height: 120,
    },
    fertilizerName: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10,
    },
    fertilizerPrice: {
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