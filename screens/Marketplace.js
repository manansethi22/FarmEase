import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import * as React from "react";
import { Searchbar } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Marketplace = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome
          name="search"
          size={24}
          style={{ marginRight: 12 }}
          color="black"
        />
        <Text style={styles.input}>Search Products</Text>
      </View>
      <ScrollView>
        <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.headText}>Categories</Text>
          </View>

          <View style={styles.viewContent}>
            <TouchableOpacity
              style={styles.imageContainer1}
              onPress={() => navigation.navigate("Seeds")}
            >
              <Image
                source={{
                  uri: "https://articles-1mg.gumlet.io/articles/wp-content/uploads/2016/12/seeds.jpg?compress=true&quality=80&w=640&dpr=2.6",
                }}
                style={styles.image2}
              />
              <Text style={styles.text1}>Seeds</Text>
              <Text style={styles.text2}>Startiing from ₹150</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageContainer1}
              onPress={() => navigation.navigate("Fertilizers")}
            >
              <Image
                source={{
                  uri: "https://eos.com/wp-content/uploads/2023/11/components-of-different-types-of-fertilizers.jpg",
                }}
                style={styles.image2}
              />
              <Text style={styles.text1}>Fertilizers</Text>
              <Text style={styles.text2}>Startiing from ₹500 </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewContent}>
            <TouchableOpacity
              style={styles.imageContainer1}
              onPress={() => navigation.navigate("Tools")}
            >
              <Image
                source={{
                  uri: "https://www.shutterstock.com/image-vector/gardening-gardener-planting-work-tools-260nw-726432694.jpg",
                }}
                style={styles.image2}
              />
              <Text style={styles.text1}>Tools</Text>
              <Text style={styles.text2}>Startiing from ₹1000 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageContainer1}
              onPress={() => navigation.navigate("Plants")}
            >
              <Image
                source={{
                  uri: "https://ichef.bbci.co.uk/news/976/cpsprodpb/167A4/production/_131086029_gettyimages-1303980089.jpg",
                }}
                style={styles.image2}
              />
              <Text style={styles.text1}>Plants</Text>
              <Text style={styles.text2}>Startiing from ₹60 </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 35, paddingHorizontal: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.headText}>Buy or Rent </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={styles.imageContainer1}
                onPress={() => navigation.navigate("Tractor")}
              >
                <Image
                  source={{
                    uri: "https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-e-series-cab.jpg",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Vehicles</Text>
                <Text style={styles.text2}>₹1500/day </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.imageContainer1}
                onPress={() => navigation.navigate("Thresher")}
              >
                <Image
                  source={{
                    uri: "https://i.ytimg.com/vi/cphF0TEZjrM/maxresdefault.jpg",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Thresher</Text>
                <Text style={styles.text2}>₹2000/day </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
              }}
            >
              <TouchableOpacity
                style={styles.imageContainer1}
                onPress={() => navigation.navigate("Drone")}
              >
                <Image
                  source={{
                    uri: "https://agrospectrumindia.com/wp-content/uploads/2023/11/Drones-indiamart.com_.webp",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Drone</Text>
                <Text style={styles.text2}>₹3000/day </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.imageContainer1}
                onPress={() => navigation.navigate("Cultivator")}
              >
                <Image
                  source={{
                    uri: "https://i.ytimg.com/vi/gzVy9NEaXlU/maxresdefault.jpg",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Cultivater</Text>
                <Text style={styles.text2}>₹2000/day </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
};

export default Marketplace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  searchBar: {
    marginHorizontal: 20,
    backgroundColor: "#E5EFE2",
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    fontSize: 14,

    color: "#5C685C",
    fontWeight: "400",
  },
  headText: {
    fontSize: 20,
    fontWeight: "500",
  },
  viewContent: {
    flexDirection: "row",
    gap: 10,
  },
  text1: {
    fontSize: 16,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  text2: {
    fontSize: 14,
    fontWeight: "400",
    alignSelf: "flex-start",
    color: "#409C40",
  },
  imageContainer1: {
    marginTop: 15,
    // marginRight: 15,
  },
  image2: {
    width: (width - 50) / 2,
    height: 160,
    marginBottom: 10,
    borderRadius: 10,
  },
  image1: {
    width: 160,
    height: 160,
    marginBottom: 10,
    borderRadius: 10,
  },
});
