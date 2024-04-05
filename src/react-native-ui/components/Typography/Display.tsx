import React from "react";
import { useTheme } from "../../Theme/ThemeContext";
import { Text, TextProps } from "../../components/Text/Text";

export const Display = ({ text, style }: TextProps) => {
  const { theme } = useTheme();
  return <Text style={style ?? theme.typography.display} text={text} />;
};
