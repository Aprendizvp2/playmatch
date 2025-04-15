import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/src/context/AuthContext";

export type SignInFormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email("Correo inválido").required("Correo requerido"),
  password: yup.string().required("Contraseña requerida"),
});

export const useViewModel = () => {
  const router = useRouter();
  const { setUser } = useAuth(); // 👈 nuevo

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      await AsyncStorage.removeItem("access_token");

      const response = await fetch("http://localhost:3001/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Error al iniciar sesión");
      }

      const token = result.access_token;
      await AsyncStorage.setItem("access_token", token);

      const profileResponse = await fetch(
        "http://localhost:3001/auth/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const user = await profileResponse.json();

      if (!profileResponse.ok) {
        throw new Error(user.message || "Error al obtener perfil");
      }

      setUser(user); // 👈 Guarda el usuario en contexto

      Toast.show({
        type: "success",
        text1: "Sesión iniciada ✅",
      });

      router.push("/(tabs)");
    } catch (error: any) {
      console.error("Error durante login:", error);
      Toast.show({
        type: "error",
        text1: "Error al iniciar sesión ❌",
        text2: error.message || "Verifica tus credenciales",
      });
    }
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    isValid,
  };
};
