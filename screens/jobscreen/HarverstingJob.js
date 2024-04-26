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

import { Entypo } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;

const harvestingJobsData = [
  {
    id: "1",
    jobTitle: "Harvesting Assistant",
    landmark: "Gurugram",
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
    landmark: "Sohna",
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
    jobTitle: "Harvesting Technician",
    landmark: "Farukhnagar",
    image:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/4/2023_4$largeimg_1087758395.JPG",
    description:
      "Operate and maintain harvesting machinery and equipment. Responsibilities include troubleshooting technical issues, performing routine maintenance, and ensuring proper functioning of equipment.",
    wagePerHour: "₹250",
    duration: "12 days",
  },
  {
    id: "5",
    jobTitle: "Harvesting Supervisor",
    landmark: "Faridabad",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQofWEk6UfjRuWoVWD8vAsLTzCvjGJFMlogAInpesBhIA&s",
    description:
      "Supervise and coordinate harvesting activities on the farm. Responsibilities include overseeing harvesting teams, monitoring productivity, and ensuring compliance with quality standards.",
    wagePerHour: "₹350",
    duration: "18 days",
  },
  {
    id: "6",
    jobTitle: "Harvesting Specialist",
    landmark: "Palwal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZcea7dLplIgEYYyp0C61xJ5PJfvgfu-ZAz5HKvr6rQ&s",
    description:
      "Specialize in specific crops or harvesting techniques. Responsibilities include providing expertise in crop selection, harvesting methods, and post-harvest handling.",
    wagePerHour: "₹280",
    duration: "16 days",
  },
  {
    id: "7",
    jobTitle: "Seasonal Harvester",
    landmark: "Hodal",
    image:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/4/2023_4$largeimg_1087758395.JPG",
    description:
      "Work as a seasonal harvester during peak harvest periods. Responsibilities include assisting with crop harvesting, sorting produce, and maintaining harvesting equipment.",
    wagePerHour: "₹220",
    duration: "14 days",
  },
  {
    id: "8",
    jobTitle: "Harvesting Laborer",
    landmark: "Panipat",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZcea7dLplIgEYYyp0C61xJ5PJfvgfu-ZAz5HKvr6rQ&s",
    description:
      "Perform manual labor tasks related to harvesting activities. Responsibilities include carrying out harvesting tasks as directed, working efficiently, and following safety guidelines.",
    wagePerHour: "₹190",
    duration: "25 days",
  },
];

const HarvestingJobCard = ({ jobTitle, landmark, image, wagePerHour }) => {
  return (
    <View style={styles.jobContainer}>
      <View>
        <Text style={styles.text1}>{jobTitle}</Text>
        <View style={styles.rowContainer1}>
          <View style={styles.rowContainer}>
            <Entypo
              name="location"
              size={14}
              color="green"
              style={{ marginRight: 5 }}
            />
            <Text style={[styles.text2]}>{landmark}</Text>
          </View>
          <Text style={[styles.text2, { marginLeft: 30 }]}>
            {wagePerHour}/hr
          </Text>
        </View>
        <View style={styles.applyBtn}>
          <Text style={styles.text3}>Apply Job</Text>
        </View>
      </View>
      <Image source={{ uri: image }} style={styles.jobContainerImage} />
    </View>
  );
};

const HarvestingJobs = ({ navigation }) => {
  const renderHarvestingJobItem = ({ item }) => (
    <Pressable
      onPress={() => {
        const data = {
          id: item.id,
          jobTitle: item.jobTitle,
          description: item.description,
          wagePerHour: item.wagePerHour,
          landmark: item.landmark,
          duration: item.duration,
          image: item.image.toString(), // Convert image URI to string
        };
        navigation.navigate("JobPage", { data });
      }}
    >
      <HarvestingJobCard
        jobTitle={item.jobTitle}
        landmark={item.landmark}
        image={item.image}
        wagePerHour={item.wagePerHour}
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
          style={{ marginTop: 20, marginLeft: 20 }}
        />
      </TouchableOpacity>
      <Text style={styles.headText}>Jobs</Text>
      <FlatList
        data={harvestingJobsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderHarvestingJobItem}
        showsVerticalScrollIndicator={false}
      />
       
    </View>
  );
};

export default HarvestingJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // paddingHorizontal: 20,
  },
  jobContainer: {
    width: WIDTH - 40,
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
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  rowContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 190,
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text2: {
    fontSize: 14,
    color: "green",
  },
  text3: {
    fontSize: 16,
    fontWeight: "500",
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
  headText: {
    fontSize: 28,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: -35,
    marginBottom: 30,
  },
});
