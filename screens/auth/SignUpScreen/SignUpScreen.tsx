import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useCallback } from "react";
import { Link, router } from "expo-router";
import { Colors } from "@/constants/Colors";

export const SignUpScreen = () => {
  const handleStart = useCallback(() => {
    router.push("/(tabs)");
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor={Colors.main.black}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        placeholderTextColor={Colors.main.black}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        placeholderTextColor={Colors.main.black}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleStart} style={styles.button}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
        <View style={styles.doesntHaveAccountContent}>
          <Text style={styles.doesntHaveAccountText}>
            Ya tengo una cuenta
          </Text>
          <Link style={styles.link} href="/(auth)/signin">
            Ingresar
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.main.primary,
    gap: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.main.white,
    textAlign: "center",
  },
  input: {
    borderRadius: 12,
    padding: 16,
    width: "100%",
    backgroundColor: Colors.main.white,
    color: Colors.main.primary,
  },
  buttonContainer: {
    width: "100%",
    gap: 4,
  },
  button: {
    borderRadius: 100,
    padding: 16,
    width: "100%",
    backgroundColor: Colors.buttons.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.main.white,
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  doesntHaveAccountContent: {
    flexDirection: "row",
    alignSelf: "flex-end",
    gap: 4,
  },
  doesntHaveAccountText: {
    fontSize: 16,
    color: Colors.main.white,
  },
  link: {
    fontSize: 16,
    color: Colors.actions.links,
    textDecorationLine: "underline",
  },
});
