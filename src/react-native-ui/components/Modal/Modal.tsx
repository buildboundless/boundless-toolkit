import React from "react";
import { Modal as _Modal, StyleSheet, View } from "react-native";
import { useTheme } from "../../Theme/ThemeContext";

export interface ModalProps {
  children?: React.ReactNode;
  visible?: boolean;
  onRequestClose?: () => void;
}

export const Modal = ({ children, visible, onRequestClose }: ModalProps) => {
  const { theme } = useTheme();

  return (
    <_Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent={true}
      animationType="slide"
    >
      <View style={[styles.container, { backgroundColor: theme.surfaceColor }]}>
        {children}
      </View>
    </_Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});