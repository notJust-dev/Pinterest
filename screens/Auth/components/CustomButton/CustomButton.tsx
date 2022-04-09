import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../../../constants/Colors";

interface ICustomButton {
  onPress: () => void;
  text: string;
  type?: "PRIMARY" | "SECONDARY" | "TERTIARY";
  bgColor?: string;
  fgColor?: string;
}

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}: ICustomButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: Colors.light.tint,
  },

  container_SECONDARY: {
    borderColor: Colors.light.tint,
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_PRIMARY: {},

  text_SECONDARY: {
    color: Colors.light.tint,
  },

  text_TERTIARY: {
    color: Colors.light.tint,
  },
});

export default CustomButton;
