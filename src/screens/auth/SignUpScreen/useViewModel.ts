import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Correo inválido").required("Correo requerido"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("Contraseña requerida"),
});

export const useViewModel = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const response = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Error en el registro");
      }

      Toast.show({
        type: "success",
        text1: "Tu cuenta fue creada correctamente ✅",
      });

      router.push("/signin");
    } catch (error: any) {
      console.error("Error during registration: ", error);

      Toast.show({
        type: "error",
        text1: "Ocurrió un error. Intenta más tarde ❌",
      });
    }
  };

  return {
    control,
    errors,
    isValid,
    handleSubmit,
    onSubmit,
  };
};
