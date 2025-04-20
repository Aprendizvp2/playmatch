import { StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Link } from "expo-router";
import { Controller } from "react-hook-form";
import { useViewModel } from "./useViewModel";
import { Colors } from "@/src/constants/Colors";
import { CustomButton, CustomTextInput } from "@/src/components";

export const SignUpScreen = () => {
  const { control, errors, isValid, handleSubmit, onSubmit } = useViewModel();

  return (
    <View flex-1 center backgroundColor={Colors.main.primary} gap-16>
      <Text color={Colors.main.white} text20H>
        Registro
      </Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <CustomTextInput
            placeholder="Nombre"
            placeholderTextColor={Colors.main.black}
            value={value}
            onChangeText={onChange}
            autoCapitalize="none"
            errorMessage={errors.name?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <CustomTextInput
            placeholder="Correo"
            placeholderTextColor={Colors.main.black}
            value={value}
            onChangeText={onChange}
            autoCapitalize="none"
            errorMessage={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <CustomTextInput
            placeholder="Contraseña"
            placeholderTextColor={Colors.main.black}
            value={value}
            secureTextEntry
            onChangeText={onChange}
            autoCapitalize="none"
            errorMessage={errors.password?.message}
          />
        )}
      />
      <CustomButton
        title="Crear cuenta"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
      <View style={styles.doesntHaveAccountContent}>
        <Text color={Colors.main.white} text70>
          Ya tengo una cuenta
        </Text>
        <Link style={styles.link} href="/(auth)/signin">
          Iniciar sesión
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  doesntHaveAccountContent: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    gap: 4,
  },
  link: {
    fontSize: 16,
    color: Colors.actions.links,
    textDecorationLine: "underline",
  },
});
