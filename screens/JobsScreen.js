import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import * as React from "react";
import { Searchbar } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const harvestingJobsData = [
  {
    id: "1",
    jobTitle: "Pest Control",
    landmark: "Sohna",
    image:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/4/2023_4$largeimg_1087758395.JPG",
    description:
      "Assist in harvesting crops, including fruits, vegetables, and grains. Responsibilities include operating harvesting machinery, handling harvested produce, and maintaining equipment.",
    wagePerHour: "₹200",
    duration: "15 days",
  },
  {
    id: "2",
    jobTitle: "Field Supervisor",
    landmark: "Basai",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofWEk6UfjRuWoVWD8vAsLTzCvjGJFMlogAInpesBhIA&s",
    description:
      "Supervise harvesting operations in the field, ensuring efficiency and quality. Responsibilities include overseeing harvesting teams, coordinating schedules, and implementing safety measures.",
    wagePerHour: "₹300",
    duration: "10 days",
  },
  {
    id: "3",
    jobTitle: "Farm Worker",
    landmark: "Bhondsi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZcea7dLplIgEYYyp0C61xJ5PJfvgfu-ZAz5HKvr6rQ&s",
    description:
      "Work on the farm to assist in various harvesting tasks. Responsibilities include picking crops, loading and unloading produce, and performing general farm maintenance.",
    wagePerHour: "₹180",
    duration: "20 days",
  },
  {
    id: "4",
    jobTitle: "Sowing Worker",
    landmark: "Farukhnagar",
    image:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/4/2023_4$largeimg_1087758395.JPG",
    description:
      "Operate and maintain harvesting machinery and equipment. Responsibilities include troubleshooting technical issues, performing routine maintenance, and ensuring proper functioning of equipment.",
    wagePerHour: "₹250",
    duration: "12 days",
  },
  
  
];

const JobsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <FontAwesome
          name="search"
          size={24}
          style={{ marginRight: 12 }}
          color="black"
        />
        <Text style={styles.input}>Search Jobs</Text>
      </View>
      <ScrollView>
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.headText}>Agriculture Jobs</Text>
    
          </View>
          <View>
            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
             <TouchableOpacity
                style={styles.imageContainer1}
                onPress={() => navigation.navigate("Harvesting")}
              >
                <Image
                  source={{
                    uri: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-190874,resizemode-75,msid-94770895/news/economy/agriculture/september-deluge-stalls-kharif-harvesting-damages-crops.jpg",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Harvesting</Text>
                <Text style={styles.text2}>₹150/hr </Text>
                </TouchableOpacity>
              <TouchableOpacity
                style={styles.imageContainer1}
                onPress={() => navigation.navigate("Harvesting")}
              >
                <Image
                  source={{
                    uri: "https://i.ytimg.com/vi/gzVy9NEaXlU/maxresdefault.jpg",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Cultivation</Text>
                <Text style={styles.text2}>₹200/hr </Text>
                </TouchableOpacity>
              <TouchableOpacity
                style={styles.imageContainer1}
                onPress={() => navigation.navigate("Harvesting")}
              >
                <Image
                  source={{
                    uri: "https://swarajya.gumlet.io/swarajya/2019-09/2a6288bc-d67a-4f30-ac30-4b845a953406/000_Del6339926.jpg",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Sowing</Text>
                <Text style={styles.text2}>₹100/hr </Text>
                </TouchableOpacity>
              <TouchableOpacity
                style={styles.imageContainer1}
                onPress={() => navigation.navigate("Harvesting")}
              >
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFN_6rGzsyAgGTGvN7GMSpLYxttaSsB1RDQg&usqp=CAU",
                  }}
                  style={styles.image1}
                />
                <Text style={styles.text1}>Pest Control</Text>
                <Text style={styles.text2}>₹300/hr </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.headText, { marginHorizontal: 20 }]}>
            Featured Jobs
          </Text>
         
          <View style={styles.jobContainer}>
            <View>
              <Text style={styles.text1}>Pest Control</Text>
              <View style={styles.rowConatiner}>
                <View style={styles.rowConatiner}>
                  <Entypo
                    name="location"
                    size={14}
                    color="green"
                    style={{ marginRight: 5 }}
                  />

                  <Text style={[styles.text2]}>Sohna </Text>
                </View>

                <Text style={[styles.text2, { marginLeft: 30 }]}>₹300/hr </Text>
              </View>
              <TouchableOpacity style={styles.applyBtn}>
                <Text style={styles.text3}>Apply Job</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFN_6rGzsyAgGTGvN7GMSpLYxttaSsB1RDQg&usqp=CAU",
              }}
              style={styles.jobContainerImage}
            />
          </View>
          <View style={styles.jobContainer}>
            <View>
              <Text style={styles.text1}>Cultivation Worker</Text>
              <View style={styles.rowConatiner}>
                <View style={styles.rowConatiner}>
                  <Entypo
                    name="location"
                    size={14}
                    color="green"
                    style={{ marginRight: 5 }}
                  />

                  <Text style={[styles.text2]}>Bhondsi </Text>
                </View>

                <Text style={[styles.text2, { marginLeft: 30 }]}>₹50/hr </Text>
              </View>
              <TouchableOpacity style={styles.applyBtn}>
                <Text style={styles.text3}>Apply Job</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: "https://static1.bigstockphoto.com/2/7/2/large1500/272895130.jpg",
              }}
              style={styles.jobContainerImage}
            />
          </View>
          <View style={styles.jobContainer}>
            <View>
              <Text style={styles.text1}>Harvesting</Text>
              <View style={styles.rowConatiner}>
                <View style={styles.rowConatiner}>
                  <Entypo
                    name="location"
                    size={14}
                    color="green"
                    style={{ marginRight: 5 }}
                  />

                  <Text style={[styles.text2]}>Gurugram </Text>
                </View>

                <Text style={[styles.text2, { marginLeft: 23 }]}>₹250/hr </Text>
              </View>
              <TouchableOpacity style={styles.applyBtn}>
                <Text style={styles.text3}>Apply Job</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: "https://kjcdn.gumlet.io/media/88278/farmers.jpg",
              }}
              style={styles.jobContainerImage}
            />
          </View>
          <View style={styles.jobContainer}>
            <View>
              <Text style={styles.text1}>Sowing Worker</Text>
              <View style={styles.rowConatiner}>
                <View style={styles.rowConatiner}>
                  <Entypo
                    name="location"
                    size={14}
                    color="green"
                    style={{ marginRight: 5 }}
                  />

                  <Text style={[styles.text2]}>Farukhnagar </Text>
                </View>

                <Text style={[styles.text2, { marginLeft: 30 }]}>₹100/hr </Text>
              </View>
              <TouchableOpacity style={styles.applyBtn}>
                <Text style={styles.text3}>Apply Job</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: "https://swarajya.gumlet.io/swarajya/2019-09/2a6288bc-d67a-4f30-ac30-4b845a953406/000_Del6339926.jpg",
              }}
              style={styles.jobContainerImage}
            />
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
              onPress={() => navigation.navigate("Postjob1")}
            >
              <Text style={styles.text3}>Post Job</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height:100}}></View>
      </ScrollView>
    </View>
  );
};

export default JobsScreen;

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

  viewContent: {
    flexDirection: "row",
    gap: 10,
  },
  jobContainer: {
    width: width - 40,
    height: 115,
    paddingHorizontal: 16,

    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#E5EFE2",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    backgroundColor: "#F2F5F2",
    marginTop: 10,
  },
  jobContainerImage: {
    width: 120,
    height: 85,
    borderRadius: 12,
  },
  rowConatiner: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  applyBtn: {
    backgroundColor: "#BCD99E",
    height: 35,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 5,
    marginL: 10,
  },
});
