import React from "react";
import { useTheme } from "../../Theme/ThemeContext";
import { Text, TextProps } from "../../components/Text/Text";

export const Label = ({ text, style }: TextProps) => {
  const { theme } = useTheme();
  return <Text style={style ?? theme.typography.label} text={text} />;
};
