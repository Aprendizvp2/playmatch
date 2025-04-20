import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Colors } from "@/src/constants/Colors";

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  width?: ViewStyle["width"];
  textStyle?: TextStyle;
  backgroundColor?: string;
  textColor?: string;
}

export const CustomButton = ({
  title,
  onPress,
  disabled,
  width,
  style,
  textStyle,
  backgroundColor = Colors.buttons.secondary,
  textColor = Colors.main.white,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? Colors.gray[400] : backgroundColor,
          width: width ?? "100%",
        },
        style,
      ]}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
