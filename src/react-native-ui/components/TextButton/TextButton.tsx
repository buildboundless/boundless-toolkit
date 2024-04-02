import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export type TextButtonProps = {
  onPress: () => void;
  text?: string;
};

export const TextButton = ({ onPress, text }: TextButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  text: { color: "blue", textDecorationLine: "underline" },
});
