import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Colors } from "@/src/constants/Colors";

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome-player.png")}
        style={styles.background}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={() => {
          router.push("/(auth)/signin");
        }}
      >
        <Text style={styles.buttonTextSignIn}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSignUp}
        onPress={() => {
          router.push("/(auth)/signin");
        }}
      >
        <Text style={styles.buttonTextSignUp}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 20,
  },
  background: {
    width: 280,
    height: 280,
    marginVertical: 20,
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
    backgroundColor: "#fff",
    padding: 16,
    width: "100%",
    borderRadius: 100,
  },
  buttonTextSignIn: {
    color: Colors.main.black,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonSignUp: {
    backgroundColor: Colors.buttons.secondary,
    padding: 16,
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 100,
  },
  buttonTextSignUp: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
