import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { Colors } from "@/src/constants/Colors";

interface CustomTextInputProps extends TextInputProps {
  errorMessage?: string;
}

export const CustomTextInput = ({
  errorMessage,
  style,
  ...rest
}: CustomTextInputProps) => {
  const hasError = !!errorMessage;

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, hasError && styles.inputError, style]}
        placeholderTextColor={Colors.main.black}
        {...rest}
      />
      {hasError && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 4,
  },
  input: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: Colors.main.white,
    color: Colors.main.primary,
    borderWidth: 1,
  },
  inputError: {
    borderColor: Colors.actions.errorFields,
  },
  errorText: {
    color: Colors.actions.errorFields,
    fontSize: 14,
    marginTop: 8,
  },
});
