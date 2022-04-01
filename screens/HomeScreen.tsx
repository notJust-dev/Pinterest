import { StyleSheet, Image, ScrollView } from "react-native";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Pin from "../components/Pin";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pin
          pin={{
            title: "Title  asdf asdf",
            image:
              "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
          }}
        />
        <Pin
          pin={{
            title: "Title  asdf asdf",
            image:
              "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/2.jpeg",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
