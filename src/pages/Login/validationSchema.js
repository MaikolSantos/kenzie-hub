import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Digite um e-mail válido")
    .email("Digite um e-mail válido")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    ),
  password: yup.string().required("Digite a senha válida"),
});
