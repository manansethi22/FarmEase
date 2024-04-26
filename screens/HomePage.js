import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";

const { width } = Dimensions.get("window");

import * as Location from "expo-location";
import { useState, useEffect } from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const images = [
  require("../assets/farmer2.png"),
  require("../assets/Farmer4.png"),
  require("../assets/farmer1.png"),
];

const HomePage = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.homecontainer}>
      <View style={styles.Appheader}>
        <Ionicons name="menu" size={30} color="black" />
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: "#B8F9B8",
            alignItems: "center",
            height: 30,
            width: 55,
            justifyContent: "center",
            marginLeft: -160,
          }}
        >
          <Text>En-</Text>
          <MaterialIcons name="language" size={24} color="black" />
        </View>
        <FontAwesome5 name="user-circle" size={30} color="black" />
      </View>
      {location && (
        <Text>
          Latitude: {location.coords.latitude}, Longitude:{" "}
          {location.coords.longitude}
        </Text>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}

      <ScrollView>
        <View style={{ height: 250 }}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2.5}
            autoplayLoop
            index={0}
            showPagination
          >
            {images.map((image, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
              </View>
            ))}
          </SwiperFlatList>
        </View>

        <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.headText}>Featured Jobs</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Jobscreen")}>
              <Text style={styles.viewText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.imageContainer1}>
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFN_6rGzsyAgGTGvN7GMSpLYxttaSsB1RDQg&usqp=CAU",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Pest Control</Text>
                <Text style={styles.text2}>₹300/hr </Text>
              </View>
              <View style={styles.imageContainer1}>
                <Image
                  source={{
                    uri: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-190874,resizemode-75,msid-94770895/news/economy/agriculture/september-deluge-stalls-kharif-harvesting-damages-crops.jpg",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Harvesting</Text>
                <Text style={styles.text2}>₹150/hr </Text>
              </View>
              <View style={styles.imageContainer1}>
                <Image
                  source={{
                    uri: "https://i.ytimg.com/vi/gzVy9NEaXlU/maxresdefault.jpg",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Cultivation</Text>
                <Text style={styles.text2}>₹200/hr </Text>
              </View>
              <View style={styles.imageContainer1}>
                <Image
                  source={{
                    uri: "https://swarajya.gumlet.io/swarajya/2019-09/2a6288bc-d67a-4f30-ac30-4b845a953406/000_Del6339926.jpg",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Sowing</Text>
                <Text style={styles.text2}>₹100/hr </Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.headText}>Farming Essentials</Text>
          </View>
          <View>
            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
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
              <TouchableOpacity
                style={styles.imageContainer1}
                onPress={() => navigation.navigate("Tools")}
              >
                <Image
                  source={{
                    uri: "https://cdn4.vectorstock.com/i/1000x1000/77/88/gardening-farming-equipment-ant-tools-vector-31307788.jpg",
                  }}
                  style={styles.image2}
                />
                <Text style={styles.text1}>Tools</Text>
                <Text style={styles.text2}>Startiing from ₹100 </Text>
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
            </ScrollView>
          </View>
        </View>
        <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.headText}>Rental</Text>
            <Text style={styles.viewText}>View All</Text>
          </View>
          <View>
            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              horizontal
              showsHorizontalScrollIndicator={false}
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
                <Text style={styles.text1}>Tractor</Text>
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
                <Text style={styles.text1}>Cultivator</Text>
                <Text style={styles.text2}>₹2000/day </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.headText}>Post a Job</Text>
          </View>

          <View>
            <Image
              source={{
                uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2vD7AnV_q8Niac9JBQB_lAYFu_wnXLWSQ9PBTEHwb6BD-U19H4aM4t-rLFD-bt1Q2p4S9cJdWBSIJIZGv60mpIKIEe6ptOt5-3QmB84fJXkv1FPrUKu0JUjuc56o7xHF13sieng2UwBVyHZTzgIv1Rj_NtZ4TlwjL-KVbPJ_DrqFhS8pSwuDspkUji5Fo/s1280/20231015_114521.jpg",
              }}
              style={styles.image3}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.text1}>Post a Job</Text>
              <Text style={styles.text2}>Looking for seasonal workers?</Text>
              <Text style={styles.text2}>Post your job and onnect with</Text>
              <Text style={styles.text2}>Local laborers.</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#BCD99E",
                height: 40,
                width: 110,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                marginTop: 30,
              }}
            >
              <Text style={styles.text3}>Post Job</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.jobContainer}>
          <View>
            <Text style={styles.text1}>Sowing Worker</Text>
            <Text style={styles.text2}>₹100/hr </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#BCD99E",
                height: 40,
                width: 110,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                marginTop: 10,
                marginL: 10,
              }}
            >
              <Text style={styles.text3}>Apply Job</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://swarajya.gumlet.io/swarajya/2019-09/2a6288bc-d67a-4f30-ac30-4b845a953406/000_Del6339926.jpg",
            }}
            style={styles.jobContainerImage}
          />
        </View> */}

        <View style={styles.lastComponent}></View>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 0,
          right: 5,
          padding: 16, // Adjust padding as needed
        }}
        onPress={() => navigation.navigate("WebView1")}
      >
        <Image
          source={require("../assets/chatbot.png")}
          style={{ width: 80, height: 80 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  Appheader: {
    paddingTop: 10,
    paddingBottom: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  lastComponent: {
    height: 100,
  },
  imageContainer: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  headText: {
    fontSize: 20,
    fontWeight: "500",
  },
  viewText: {
    fontSize: 16,
    fontWeight: "400",
    textDecorationLine: "underline",
    color: "#024002",
  },
  scrollViewContent: {
    flexDirection: "row",
  },
  imageContainer1: {
    marginTop: 15,
    marginRight: 15,
  },
  image1: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
  },
  image2: {
    width: 160,
    height: 160,
    marginBottom: 10,
    borderRadius: 10,
  },
  image3: {
    width: width - 40,
    height: 190,
    marginBottom: 10,
    borderRadius: 10,
    marginTop: 10,
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
  text3: {
    fontSize: 16,
    fontWeight: "500",
  },
  jobContainer: {
    width: width - 40,
    height: 125,
    paddingHorizontal: 16,

    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#CBCEC8",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    backgroundColor: "#EDF2E8",
    marginTop: 10,
  },
  jobContainerImage: {
    width: 110,
    height: 93,
    borderRadius: 12,
  },
});
