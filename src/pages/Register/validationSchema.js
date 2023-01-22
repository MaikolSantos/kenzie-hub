import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Digite seu nome")
    .matches(
      /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/,
      "Digite um nome válido"
    ),
  email: yup
    .string()
    .required("Digite um e-mail válido")
    .email("Digite um e-mail válido")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    ),
  password: yup
    .string()
    .required("Digite a senha válida")
    .min(8, "Sua senha deve conter no mínimo 8 caracteres")
    .matches(/(?=.*\d)/, "Sua senha deve conter ao menos um dígito")
    .matches(
      /(?=.*[a-z])/,
      "Sua senha deve conter ao menos uma letra minúscula"
    )
    .matches(
      /(?=.*[A-Z])/,
      "Sua senha deve conter ao menos uma letra maiúscula"
    )
    .matches(
      /(?=.*[$*&,.@#])/,
      "Sua senha deve conter ao menos um caractere especial"
    ),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "Senhas não conferem"),
  bio: yup.string().required("Fale um pouco sobre você"),
  contact: yup
    .string()
    .matches(/[0-9 .+()-]/g, "Seu contato deve conter apenas números")
    .max(20, "Seu contato deve conter no máximo 20 caracteres")
    .min(11, "Seu contato deve conter no mínimo 11 caracteres"),
  course_module: yup.string().required('Escolha um módulo')
});
