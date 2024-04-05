import { Text as _Text, TextStyle } from "react-native";

export type TextProps = {
  text?: string;
  style?: TextStyle;
};

export const Text = ({ text, style, ...props }: TextProps) => {
  return (
    <_Text style={style} {...props}>
      {text}
    </_Text>
  );
};
