import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useViewModel } from "./useViewModel";
import { Colors } from "@/src/constants/Colors";
import { Link } from "expo-router";
import { Controller } from "react-hook-form";

export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};

export const SignUpScreen = () => {
  const { control, errors, isValid, handleSubmit, onSubmit } = useViewModel();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholderTextColor={Colors.main.black}
            placeholder="Nombre"
            value={value}
            onChangeText={onChange}
            style={[styles.input, errors.name && styles.inputError]}
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
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
            autoCapitalize="none"
            secureTextEntry
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
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
        <View style={styles.doesntHaveAccountContent}>
          <Text style={styles.doesntHaveAccountText}>Ya tengo una cuenta</Text>
          <Link style={styles.link} href="/(auth)/signin">
            Iniciar Sesión
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
