import { Text, StyleSheet, View, Button, Image } from "react-native";
import React, { useCallback } from "react";
import { Link, router } from "expo-router";
import { Colors } from "@/constants/Colors";

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome-player.png")}
        style={styles.background}
        resizeMode="cover"
      />
      <Link style={styles.buttonSignIn} href="/(auth)/signin">
        Iniciar sesión
      </Link>
      <Link style={styles.buttonSignUp} href="/(auth)/signup">
        Sign Up
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 20
  },
  background: {
    width: 280,
    height: 280,
    marginVertical: 20
  },
  button: {
    borderRadius: 100,
    padding: 16,
    width: "100%",
    backgroundColor: "#06a3e2",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSignIn: {
    color: "#000",
    backgroundColor: "#fff",
    padding: 16,
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 100
  },
  buttonSignUp: {
    color: "#fff",
    backgroundColor: "#30BF4E",
    padding: 16,
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 100
  },
});
