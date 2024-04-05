import React from "react";
import { useTheme } from "../../Theme/ThemeContext";
import { Text, TextProps } from "../../components/Text/Text";

export const Title = ({ text, style }: TextProps) => {
  const { theme } = useTheme();
  return <Text style={style ?? theme.typography.title} text={text} />;
};
