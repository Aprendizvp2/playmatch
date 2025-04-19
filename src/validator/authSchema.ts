import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup.string().required("Nombre es requerido"),
  email: yup.string().email("Email inválido").required("Email es requerido"),
  password: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("Contraseña es requerida"),
});

export const signinSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email es requerido"),
  password: yup.string().required("Contraseña es requerida"),
});
