import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

export const FieldsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FieldS</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    width: "100%",
    padding: 12,
    backgroundColor: "#06a3e2",
  },
});
