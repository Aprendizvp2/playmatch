import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Toast from "react-native-toast-message";
import { useAuth } from "@/src/context/AuthContext";
import { useSignupMutation } from "@/src/api/authApi";
import { router } from "expo-router";
import { signupSchema } from "@/src/validator/authSchema";

export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};
export const useViewModel = () => {
  const { setTokens } = useAuth();
  const [signup] = useSignupMutation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(signupSchema), mode: "onChange" });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const res = await signup(data).unwrap();
      setTokens(res.accessToken, res.refreshToken);
      router.push("/signin");
      Toast.show({
        type: "success",
        text1: "Tu cuenta fue creada correctamente ✅",
      });
    } catch {
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
