import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/src/constants/Colors";
import { Controller } from "react-hook-form";
import { useViewModel } from "./useViewModel";

export const SignInScreen = () => {
  const { control, errors, onSubmit, handleSubmit, isValid } = useViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholderTextColor={Colors.main.black}
            placeholder="Correo"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            style={[styles.input, errors.email && styles.inputError]}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholderTextColor={Colors.main.black}
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            style={[styles.input, errors.password && styles.inputError]}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={[styles.button, !isValid && styles.disabledButton]}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <View style={styles.doesntHaveAccountContent}>
          <Text style={styles.doesntHaveAccountText}>
            ¿No tienes una cuenta?
          </Text>
          <Link style={styles.link} href="/(auth)/signup">
            Registro
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
    gap: 16,
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
    paddingTop: 8,
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
  error: {
    color: Colors.actions.errorFields,
    fontSize: 14,
    alignSelf: "flex-start",
  },
  inputError: {
    borderWidth: 1.5,
    borderColor: Colors.actions.errorFields,
  },
  disabledButton: {
    backgroundColor: Colors.gray[400],
  },
});
