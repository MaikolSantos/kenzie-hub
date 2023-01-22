import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Digite uma tecnologia"),
  status: yup.string().required("Escolha um status"),
});
