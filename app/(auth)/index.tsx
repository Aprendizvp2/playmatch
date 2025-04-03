import { View, StyleSheet } from "react-native";
import React from "react";
import { WelcomeScreen } from "@/screens/wlecomescreen";
import { Colors } from "@/constants/Colors";

export default function IndexRoute() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.main.primary,
  },
});
