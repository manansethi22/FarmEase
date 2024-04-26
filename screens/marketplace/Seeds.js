import { StyleSheet, Text, View, Image, FlatList, Pressable, Dimensions } from 'react-native';

const WIDTH = Dimensions.get("window").width;
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

seedData = [
  {
    id: '1',
    name: 'Garden Beauty Tomato Seeds',
    price: '300.00 / 10 grams',
    description: 'Garden Beauty Tomato Seeds produce high yields, beautiful colors, and delicious tomatoes.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnokuXMovoSf28i0UVUZ3k1tzGM4QtWPH7hg&s'
  },
  {
    id: '2',
    name: 'Beauty Pumpkin Seeds',
    price: '500.00 / 10 grams',
    description: 'Beauty Pumpkin Seeds are known for high productivity, especially producing beautiful and tasty pumpkins.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkP1VoRPokvCoNc5xo8Bzor1Q_VwTs4j6p5A&s'
  },
  {
    id: '3',
    name: 'Sunshine Hybrid Okra Seeds',
    price: '350.00 / 10 grams',
    description: 'Sunshine Hybrid Okra Seeds produce high yields, excellent flavor, and healthy okra.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhfQNdvXvgh2Qog3pt47ky35BjeRwQuAWXg&s'
  },
  {
    id: '4',
    name: 'Popular Chard Vegetable Seeds',
    price: '400.00 / 10 grams',
    description: 'Popular Chard Vegetable Seeds are known for high productivity, special flavor, and colorful leaves.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4VQACb4gXJjSvpO8KJFu29TNoEf8i3aGJQ&s'
  },
  {
    id: '5',
    name: 'Maharashtra Guava Seeds',
    price: '600.00 / 10 grams',
    description: 'Maharashtra Guava Seeds are popular for high productivity, sweetness, and unique flavor.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5Lf66DYJRr4rzK3jS4EIOjZhMgmKxeAVuQ&s'
  },
  {
    id: '6',
    name: 'Karnataka Cashew Seeds',
    price: '450.00 / 10 grams',
    description: 'Karnataka Cashew Seeds are known for high productivity, deliciousness, and freshness.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby4x5nz5BokdcDtrs4m_Kbw5vaiYGDschKQ&s'
  },
  {
    id: '7',
    name: 'Gujarati Pea Seeds',
    price: '250.00 / 10 grams',
    description: 'Gujarati Pea Seeds produce high yields, sweetness, and tasty peas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4fZlqZcNL0d9mHRVuP2JFbdhEXRtQgpdUA&s'
  },
  {
    id: '8',
    name: 'Rajasthani Okra Seeds',
    price: '320.00 / 10 grams',
    description: 'Rajasthani Okra Seeds produce high yields, delicious and nutritious okra.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjs6NFSe6IA1mKemmpS_hpUR6IhecyWsLOw&s'
  },
  {
    id: '9',
    name: 'Punjabi Cauliflower Seeds',
    price: '280.00 / 10 grams',
    description: 'Punjabi Cauliflower Seeds produce high yields, delicious and healthy cauliflower.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtd9q6XojUzHxFJpqxTbKsZjq2ahmYvj9wA&s'
  },
  {
    id: '10',
    name: 'Kashmiri Cabbage Seeds',
    price: '290.00 / 10 grams',
    description: 'Kashmiri Cabbage Seeds produce high yields, delicious and healthy cabbage.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRp4YNLJPAhgXmyWu-nmXOW0vBcCZ-0xAs3g&s'
  },
  {
    id: '11',
    name: 'Himachal Pradesh Tomato Seeds',
    price: '310.00 / 10 grams',
    description: 'Himachal Pradesh Tomato Seeds produce high yields, delicious and healthy tomatoes.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQGb_WSL9JxEbXsZaYfuY3oTch-2B_i8kPQ&s'
  },
  {
    id: '12',
    name: 'Bengali Brinjal Seeds',
    price: '270.00 / 10 grams',
    description: 'Bengali Brinjal Seeds produce high yields, delicious and healthy brinjals.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDvaNXWTko8491vOVIGJAxJavgZ9XK3Rt4g&s'
  },
  {
    id: '13',
    name: 'Bihari Beetroot Seeds',
    price: '260.00 / 10 grams',
    description: 'Bihari Beetroot Seeds produce high yields, delicious and healthy beetroot.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraGWM0sp_DGlwT0EEigiduOfF2Y_8rbQpRA&s'
  },
  {
    id: '14',
    name: 'Uttar Pradesh Cucumber Seeds',
    price: '240.00 / 10 grams',
    description: 'Uttar Pradesh Cucumber Seeds produce high yields, delicious and healthy cucumbers.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_iYDFZt25irBcsHRu5pR2WgUFmWEwFVEtQ&s'
  },
  {
    id: '15',
    name: 'Tamil Nadu Carrot Seeds',
    price: '230.00 / 10 grams',
    description: 'Tamil Nadu Carrot Seeds produce high yields, delicious and healthy carrots.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitdKFkcBvrc68PQPY2w3MrCUGcHCMSSgyCA&s'
  },
];
 
const SeedCard = ({ image, name, price }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.seedImage} resizeMode="contain" />
        <Text style={styles.seedName}>{name}</Text>
        <Text style={styles.seedPrice}>₹ {price}</Text>
      </View>
    );
  };
  
  const Seeds = ({ navigation }) => {
    const renderSeedItem = ({ item }) => (
      <Pressable
        // onPress={() =>
        //   navigation.navigate("ProductScreen", {
        //     name: item.name,
        //   })
        // }
      >
        <SeedCard
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

      <Text style={styles.headText}>Seeds</Text>
        <FlatList
          data={seedData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
          renderItem={renderSeedItem}
          ListFooterComponent={<View style={{ height: 100 }} />}
        />
      </View>
    );
  };
  
  export default Seeds;
  
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
    seedImage: {
      width: 120,
      height: 120,
    },
    seedName: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10,
    },
    seedPrice: {
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