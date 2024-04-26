import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const WIDTH = Dimensions.get("window").width;

const tractorsData = [
  {
    id: "1",
    name: "Mahindra Bolero Pickup",
    description:
      "The Mahindra Bolero Pickup is a rugged and reliable utility vehicle widely used for transportation of goods and materials in rural and urban areas. It features a spacious cargo bed and powerful engine.",
    price: "1200.00",
    image: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://img.haymarketsac.in/autocarpro/46fa3f64-6eaf-4a58-92ed-503f44f576d0.jpg",
  },
  {
    id: "2",
    name: "Tata Ace Mini Truck",
    description:
      "The Tata Ace Mini Truck is a versatile commercial vehicle suitable for various applications such as transportation of goods, delivery services, and small-scale businesses. It offers excellent fuel efficiency and maneuverability.",
    price: "1000.00",
    image: "https://www.trucksbuses.com/blogImages/uploads/2019/10/tata-ace-zip-trucksbuses-min.jpg",
  },
  {
    id: "3",
    name: "Maruti Suzuki Eeco Van",
    description:
      "The Maruti Suzuki Eeco Van is a spacious and affordable utility vehicle ideal for passenger transportation, goods delivery, and commercial use. It offers comfortable seating and ample cargo space.",
    price: "1500.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KPBbx6ENnjE7PORIjmjYbkgllOyAzDyL5YTbLbJy5Q&s",
  },
  {
    id: "4",
    name: "Mahindra Scorpio SUV",
    description:
      "The Mahindra Scorpio SUV is a powerful and rugged off-road vehicle suitable for both urban and rural driving conditions. It offers seating for up to seven passengers and excellent performance on rough terrain.",
    price: "2000.00",
    image: "https://images.hindustantimes.com/img/2022/12/14/1600x900/All-New_Scorpio-N_Pic_04_1653046895087_1671020621815_1671020621815.jpg",
  },
  {
    id: "5",
    name: "Swaraj 735 FE Tractor",
    description:
      "The Swaraj 735 FE Tractor is a popular choice among Indian farmers for various agricultural tasks such as ploughing, tilling, and hauling. It offers high fuel efficiency and easy maintenance.",
    price: "2500.00",
    image: "https://assets.tractorjunction.com/tractor-junction/assets/images/upload/735-fe-1631013770.webp",
  },
  {
    id: "6",
    name: "Mahindra Arjun Novo Tractor",
    description:
      "The Mahindra Arjun Novo Tractor is a modern and powerful tractor designed for heavy-duty agricultural operations. It features advanced technology, ergonomic design, and superior performance.",
    price: "3000.00",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/9/TY/ZP/OA/532026/mahindra-arjun-novo-605-di-i-4wd.jpg",
  },
  {
    id: "7",
    name: "John Deere 5310 Tractor",
    description:
      "The John Deere 5310 Tractor is a reliable and versatile machine suitable for a wide range of farming tasks. It offers excellent traction, fuel efficiency, and operator comfort.",
    price: "2800.00",
    image: "https://www.deere.co.in/assets/images/region-1/products/tractors/e-series-tractors/john-deere-india-trem%204-5310-right-angle.png",
  },
  {
    id: "8",
    name: "Escort Powertrac 439 Plus Tractor",
    description:
      "The Escort Powertrac 439 Plus Tractor is a robust and efficient tractor designed for demanding agricultural operations. It offers high power output, excellent fuel efficiency, and durability.",
    price: "2700.00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeD2obzdwjg2NsoRbDwIMaJB6LaM48GWCbJ7d2I4mQ3Q&s",
  },
]

const TractorCard = ({ image, name, price }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.tractorImage}
        resizeMode="contain"
      />
      <Text style={styles.tractorName}>{name}</Text>
      <Text style={styles.tractorPrice}>₹ {price} /Day</Text>
    </View>
  );
};

const Tractors = ({ navigation }) => {
  const renderTractorItem = ({ item }) => (
    <Pressable
      // onPress={() =>
      //   navigation.navigate("ProductScreen", {
      //     name: item.name,
      //   })
      // }
    >
      <TractorCard image={item.image} name={item.name} price={item.price} />
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

      <Text style={styles.headText}>Vehicles</Text>
      <FlatList
        data={tractorsData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
        renderItem={renderTractorItem}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </View>
  );
};

export default Tractors;

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
  tractorImage: {
    width: 120,
    height: 120,
  },
  tractorName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  tractorPrice: {
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
