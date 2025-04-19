import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Toast from "react-native-toast-message";
import { useAuth } from "@/src/context/AuthContext";
import { router } from "expo-router";
import { useSigninMutation } from "@/src/api/authApi";
import { signinSchema } from "@/src/validator/authSchema";

export type SignInFormData = {
  email: string;
  password: string;
};

export const useViewModel = () => {
  const { setTokens } = useAuth();
  const [signin] = useSigninMutation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(signinSchema) });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const res = await signin(data).unwrap();
      setTokens(res.accessToken, res.refreshToken);
      router.push("/(tabs)/player");
      Toast.show({
        type: "success",
        text1: "Sesión iniciada ✅",
      });
    } catch {
      Toast.show({
        type: "error",
        text1: "Ocurrio un error. Intenta mas tarde ❌",
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
