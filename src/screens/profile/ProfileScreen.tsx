import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGetProfileQuery } from "@/src/api/authApi";

export const ProfileScreen = () => {
  const { data } = useGetProfileQuery({});

  if (!data) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator size="large" color={Colors.main.white} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardAvoiding}
      >
        <View style={styles.infoContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.side}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Perfíl</Text>
            <View style={styles.side} />
          </View>
          <View style={styles.formContainer}>
            <Image
              source={{
                uri: "https://media.cnn.com/api/v1/images/stellar/prod/221022113542-masato-kudo-2021-file.jpg?c=original",
              }}
              style={styles.img}
              resizeMode="cover"
            />
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={data?.name || ""}
              editable={false}
              placeholderTextColor={Colors.main.black}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo"
              value={data?.email || ""}
              editable={false}
              placeholderTextColor={Colors.main.black}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value="********"
              editable={false}
              secureTextEntry
              placeholderTextColor={Colors.main.black}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonLogOut}
              onPress={async () => {
                await AsyncStorage.removeItem("access_token");
                router.push("/signin");
              }}
            >
              <Text style={styles.buttonLogOutText}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.main.primary,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  infoContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
  side: {
    width: 32,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.main.white,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 300,
  },
  input: {
    borderRadius: 12,
    padding: 16,
    width: "100%",
    backgroundColor: Colors.main.white,
    color: Colors.main.primary,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    borderRadius: 100,
    padding: 16,
    width: "100%",
    backgroundColor: Colors.main.white,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.main.black,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonLogOut: {
    borderRadius: 100,
    padding: 16,
    width: "100%",
    backgroundColor: Colors.actions.error,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogOutText: {
    color: Colors.main.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
