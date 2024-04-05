import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useTheme } from "../../Theme/ThemeContext";

export type LoadingIndicatorProps = {
  isLoading?: boolean;
};

export const LoadingIndicator = ({ isLoading = true }: LoadingIndicatorProps) => {
  const { theme } = useTheme();

  if (!isLoading) return null;

  return (
    <View style={[styles.container, { backgroundColor: theme.surfaceColor }]}>
      <ActivityIndicator size="large" color={theme.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
