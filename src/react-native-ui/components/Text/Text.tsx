import { Text as _Text } from "react-native";

export type TextProps = {
  text?: string;
};

export default function Text({ text, ...props }: TextProps) {
  return <_Text {...props}>{text}</_Text>;
}
