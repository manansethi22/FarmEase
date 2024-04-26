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
        image: 'https://dummyimage.com/200x200/000/fff&text=Tool+Image'
      },
      {
        id: '2',
        name: 'Sickle',
        description: 'Sickle is a handheld agricultural tool with a curved blade used for cutting grass, crops, and weeds. It is commonly used for harvesting crops like rice and wheat.',
        price: '100.00',
        image: 'https://dummyimage.com/200x200/000/fff&text=Tool+Image'
      },
      {
        id: '3',
        name: 'Plough',
        description: 'Plough is an agricultural implement used for tilling the soil, turning it over, and breaking it up for planting. It is pulled by animals like oxen or buffaloes.',
        price: '500.00',
        image: 'https://dummyimage.com/200x200/000/fff&text=Tool+Image'
      },
      {
        id: '4',
        name: 'Seed Drill',
        description: 'Seed Drill is a mechanized farming tool used for sowing seeds evenly in rows. It helps in efficient seed placement and optimal spacing between plants.',
        price: '1500.00',
        image: 'https://dummyimage.com/200x200/000/fff&text=Tool+Image'
      },
      {
        id: '5',
        name: 'Hoe',
        description: 'Hoe is a handheld farming tool with a flat blade used for weeding, digging, and shaping soil. It is essential for maintaining crop beds and removing weeds.',
        price: '80.00',
        image: 'https://dummyimage.com/200x200/000/fff&text=Tool+Image'
      },
      {
        id: '6',
        name: 'Hand Sprayer',
        description: 'Hand Sprayer is a manual pump device used for spraying pesticides, fertilizers, and insecticides on crops. It ensures uniform application and effective pest control.',
        price: '300.00',
        image: 'https://dummyimage.com/200x200/000/fff&text=Tool+Image'
      },
      {
        id: '7',
        name: 'Watering Can',
        description: 'Watering Can is a container with a spout used for watering plants and crops. It provides controlled water distribution and is suitable for small-scale irrigation.',
        price: '120.00',
        image: 'https://dummyimage.com/200x200/000/fff&text=Tool+Image'
      },
      {
        id: '8',
        name: 'Trowel',
        description: 'Trowel is a small handheld tool with a pointed, scoop-shaped metal blade used for planting, transplanting, and digging small holes in soil. It is ideal for gardening and horticultural tasks.',
        price: '50.00',
        image: 'https://dummyimage.com/200x200/000/fff&text=Tool+Image'
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
      onPress={() =>
        navigation.navigate("ProductScreen", {
          name: item.name,
        })
      }
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