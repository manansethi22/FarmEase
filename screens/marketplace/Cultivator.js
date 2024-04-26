import { StyleSheet, Text, View, Image, FlatList, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const WIDTH = Dimensions.get("window").width;


const cultivatorsData = [
    {
      id: '1',
      name: 'Power Tiller Cultivator',
      description: 'The Power Tiller Cultivator is a versatile machine used for primary and secondary tillage operations in various types of soil. It is equipped with multiple implements such as rotavator, plow, and harrow for efficient land preparation.',
      price: '3500',
      image: 'https://mlhobevaucyf.i.optimole.com/w:1200/h:742/q:mauto/ig:avif/f:best/https://novo3ds.in/wp-content/uploads/2023/06/AG0141_Power_cultivator_4.jpg'
    },
    {
      id: '2',
      name: 'Mini Tractor Cultivator',
      description: 'The Mini Tractor Cultivator is a compact and maneuverable machine suitable for small farms and orchards. It is designed for soil loosening, weed control, and seedbed preparation, offering versatility and ease of operation.',
      price: '2800',
      image: 'https://international.sonalika.com/wp-content/uploads/2020/09/6-15.jpg'
    },
    {
      id: '3',
      name: 'Heavy Duty Spring Loaded Cultivator',
      description: 'The Heavy Duty Spring Loaded Cultivator is designed for deep tillage and soil aeration in heavy or compacted soils. It features sturdy construction, adjustable tines, and spring-loaded assemblies for effective weed control and soil conditioning.',
      price: '4200',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhs7rNLzHkEWxLymNMg2-x1vdncwzwUxkETUVQhWrr6Q&s'
    },
    {
      id: '4',
      name: 'Rotary Tiller Cultivator',
      description: 'The Rotary Tiller Cultivator is ideal for seedbed preparation, weed control, and mixing organic matter into the soil. It features rotating blades that break up soil clods and create a fine tilth, promoting better seed germination and root growth.',
      price: '3200',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HJkFmgOZd4jKPLiHyyMqPKf7nn6PDkspFgpfiCAt9g&s'
    },
    {
      id: '5',
      name: 'Mounted Offset Disc Harrow',
      description: 'The Mounted Offset Disc Harrow is used for breaking up soil clods, incorporating crop residues, and leveling the field surface. It is suitable for both primary and secondary tillage operations and offers efficient soil preparation for planting.',
      price: '3800',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/348123058/CG/BY/UR/127621971/fbmodh-24-mounted-offset-disc-harrow.jpg'
    },
  ];

  

const CultivatorCard = ({ image, name, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cultivatorImage} resizeMode="contain" />
      <Text style={styles.cultivatorName}>{name}</Text>
      <Text style={styles.cultivatorPrice}>₹ {price} /Day</Text>
    </View>
  );
};

const Cultivators = ({ navigation }) => {
  const renderCultivatorItem = ({ item }) => (
    <Pressable
      // onPress={() =>
      //   navigation.navigate("ProductScreen", {
      //     name: item.name,
      //   })
      // }
    >
      <CultivatorCard
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

      <Text style={styles.headText}>Cultivators</Text>
      <FlatList
        data={cultivatorsData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
        renderItem={renderCultivatorItem}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </View>
  );
};

export default Cultivators;

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
  cultivatorImage: {
    width: 120,
    height: 120,
  },
  cultivatorName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  cultivatorPrice: {
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