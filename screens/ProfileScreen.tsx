import { Entypo, Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import pins from "../assets/data/pins";
import MasonryList from "../components/MasonryList";

import { Text, View } from "../components/Themed";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Feather name="share" size={24} color="black" style={styles.icon} />
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>

        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Vadim Savin</Text>
        <Text style={styles.subtitle}>123 Followers | 534 Followings</Text>
      </View>

      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  subtitle: {
    color: "#181818",
    fontWeight: "600",
    margin: 10,
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
    marginVertical: 10,
  },
  header: {
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
