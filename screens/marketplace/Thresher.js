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

const threshersData = [
  {
    id: "1",
    name: "Tractor Mounted Paddy Thresher",
    description:
      "The Tractor Mounted Paddy Thresher is a specialized agricultural machine used for separating grains from harvested paddy crops. It is mounted on a tractor and can thresh large quantities of paddy efficiently.",
    price: "3500.00",
    image: "https://dummyimage.com/200x200/000/fff&text=Thresher+Image",
  },
  {
    id: "2",
    name: "Multicrop Thresher",
    description:
      "The Multicrop Thresher is a versatile machine capable of threshing various crops such as wheat, rice, maize, and pulses. It is suitable for small to medium-scale farmers and offers high efficiency.",
    price: "3000.00",
    image: "https://dummyimage.com/200x200/000/fff&text=Thresher+Image",
  },
  {
    id: "3",
    name: "Soybean Thresher",
    description:
      "The Soybean Thresher is specifically designed for threshing soybean crops and separating soybean pods from the plants. It ensures gentle handling of soybeans and minimal grain damage.",
    price: "2800.00",
    image: "https://dummyimage.com/200x200/000/fff&text=Thresher+Image",
  },
  {
    id: "4",
    name: "Mini Paddy Thresher",
    description:
      "The Mini Paddy Thresher is a compact and portable machine suitable for small-scale farmers and homestead use. It can thresh paddy crops efficiently and requires minimal maintenance.",
    price: "2500.00",
    image: "https://dummyimage.com/200x200/000/fff&text=Thresher+Image",
  },
  {
    id: "5",
    name: "Wheat Thresher",
    description:
      "The Wheat Thresher is designed specifically for threshing wheat crops and separating wheat grains from the straw. It offers high throughput and precise grain separation.",
    price: "2700.00",
    image: "https://dummyimage.com/200x200/000/fff&text=Thresher+Image",
  },
  {
    id: "6",
    name: "Sunflower Thresher",
    description:
      "The Sunflower Thresher is engineered to thresh sunflower crops and extract seeds efficiently. It is equipped with special mechanisms to handle sunflower heads and minimize seed loss.",
    price: "3200.00",
    image: "https://dummyimage.com/200x200/000/fff&text=Thresher+Image",
  },
  {
    id: "7",
    name: "Maize Thresher",
    description:
      "The Maize Thresher is specifically designed for threshing maize (corn) crops and separating maize kernels from the cob. It offers high productivity and precise grain separation.",
    price: "2900.00",
    image: "https://dummyimage.com/200x200/000/fff&text=Thresher+Image",
  },
  {
    id: "8",
    name: "Pulse Thresher",
    description:
      "The Pulse Thresher is used for threshing various pulse crops such as lentils, chickpeas, and peas. It ensures efficient separation of grains from the pods while minimizing damage.",
    price: "2600.00",
    image: "https://dummyimage.com/200x200/000/fff&text=Thresher+Image",
  },
];

const ThresherCard = ({ image, name, price }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.thresherImage}
        resizeMode="contain"
      />
      <Text style={styles.thresherName}>{name}</Text>
      <Text style={styles.thresherPrice}>₹ {price} /Day</Text>
    </View>
  );
};

const Threshers = ({ navigation }) => {
  const renderThresherItem = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.navigate("ProductScreen", {
          name: item.name,
        })
      }
    >
      <ThresherCard image={item.image} name={item.name} price={item.price} />
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

      <Text style={styles.headText}>Threshers</Text>
      <FlatList
        data={threshersData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
        renderItem={renderThresherItem}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </View>
  );
};

export default Threshers;

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
  thresherImage: {
    width: 120,
    height: 120,
  },
  thresherName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  thresherPrice: {
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
