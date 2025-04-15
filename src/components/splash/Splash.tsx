import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { Colors } from "@/src/constants/Colors";

export const Splash = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlayMatch</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.main.primary,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.main.white,
  },
});
