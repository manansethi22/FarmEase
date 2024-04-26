import { StyleSheet, Text, View, Image, FlatList, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const WIDTH = Dimensions.get("window").width;

const toolsData = [
  {
      id: '1',
      name: 'Kurpi',
      description: 'Kurpi is a traditional Indian farming tool used for digging, planting, and cultivating soil. It has a small, curved metal blade attached to a wooden handle.',
      price: '150.00',
      image:'https://5.imimg.com/data5/SELLER/Default/2023/3/VG/YR/HH/45489165/khurpa-22-500x500.jpg'
    },
    {
      id: '2',
      name: 'Sickle',
      description: 'Sickle is a handheld agricultural tool with a curved blade used for cutting grass, crops, and weeds. It is commonly used for harvesting crops like rice and wheat.',
      price: '100.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabI_oLPZIgYgJf12DfewlzP1L7Sqv201VV_-CDtZTcw&s'
    },
   
    {
      id: '4',
      name: 'Seed Drill',
      description: 'Seed Drill is a mechanized farming tool used for sowing seeds evenly in rows. It helps in efficient seed placement and optimal spacing between plants.',
      price: '1500.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSDKgkqxjFkyod3ubXbMJGx6ahz8cBh-YPrUEJBMGsw&s'
    },
    {
      id: '5',
      name: 'Hoe',
      description: 'Hoe is a handheld farming tool with a flat blade used for weeding, digging, and shaping soil. It is essential for maintaining crop beds and removing weeds.',
      price: '80.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwg5eZxHcwOZ_vVDHsN7mRMN91v5I3KRe7Cg7jCkmjfA&s'
    },
    {
      id: '6',
      name: 'Hand Sprayer',
      description: 'Hand Sprayer is a manual pump device used for spraying pesticides, fertilizers, and insecticides on crops. It ensures uniform application and effective pest control.',
      price: '300.00',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3dkxgqxWBTer6J2N5oRA21igXyYcf6OzurX4-o3fwQ&s'
    },
    {
      id: '7',
      name: 'Watering Can',
      description: 'Watering Can is a container with a spout used for watering plants and crops. It provides controlled water distribution and is suitable for small-scale irrigation.',
      price: '120.00',
      image: 'https://m.media-amazon.com/images/I/51boADeC7OL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: '8',
      name: 'Trowel',
      description: 'Trowel is a small handheld tool with a pointed, scoop-shaped metal blade used for planting, transplanting, and digging small holes in soil. It is ideal for gardening and horticultural tasks.',
      price: '50.00',
      image: 'https://m.media-amazon.com/images/I/41E0Yf+AxnL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '3',
      name: 'Plough',
      description: 'Plough is an agricultural implement used for tilling the soil, turning it over, and breaking it up for planting. It is pulled by animals like oxen or buffaloes.',
      price: '500.00',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fancient-tools-plow&psig=AOvVaw2cX8TueH2oQ8g0STQ9IPh8&ust=1714195739601000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiMnfSS34UDFQAAAAAdAAAAABAJ'
    },
];


const ToolCard = ({ image, name, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.toolImage} resizeMode="contain" />
      <Text style={styles.toolName}>{name}</Text>
      <Text style={styles.toolPrice}>₹ {price}</Text>
    </View>
  );
};

const Tools = ({ navigation }) => {
  const renderToolItem = ({ item }) => (
    <Pressable
    onPress={() => {
      const data = {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image.toString(), // Convert image URI to string
      };
      navigation.navigate("BuyProduct1", { data });
    }}
    >
      <ToolCard
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

      <Text style={styles.headText}>Tools</Text>
      <FlatList
        data={toolsData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
        renderItem={renderToolItem}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </View>
  );
};

export default Tools;

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
  toolImage: {
    width: 120,
    height: 120,
  },
  toolName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  toolPrice: {
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