import React from "react";
import { ActivityIndicator } from "react-native";

type LoadingIndicatorProps = {
  isLoading?: boolean;
  style?: object;
};

const LoadingIndicator = ({
  isLoading = true,
  ...props
}: LoadingIndicatorProps) => {
  if (!isLoading) return null;

  return <ActivityIndicator size={"large"} {...props} />;
};

export default LoadingIndicator;
