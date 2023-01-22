import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";

import { schema } from "./validationSchema";

import { Container } from "./styles";

export function Register() {
  const { loadingPage, loading, userRegister } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const optionsCourseModule = [
    "1º Módulo (Front-end Básico)",
    "2º Módulo (Front-end Avançado)",
    "3º Módulo (Front-end com React)",
    "4º Módulo (Back-end Básico)",
    "5º Módulo (Back-end Avançado)",
    "6º Módulo (Trilha de Empregabilidade)",
  ];

  function backPage() {
    navigate(-1);
  }

  return (
    <>
      {loadingPage ? (
        <p>{loadingPage}</p>
      ) : (
        <Container>
          <Header>
            <Button type="button" onClick={backPage} text="Voltar" />
          </Header>

          <Form
            title="Crie Sua conta"
            description="Rapido e grátis, vamos nessa"
            onSubmit={handleSubmit(userRegister)}
          >
            <Input
              id="name"
              text="Nome Completo"
              type="text"
              placeholder="Digite aqui seu nome completo"
              register={register("name")}
              error={errors.name && errors.name.message}
            />
            <Input
              id="email"
              text="Email"
              type="email"
              placeholder="Digite aqui seu email"
              register={register("email")}
              error={errors.email && errors.email.message}
            />
            <Input
              id="password"
              text="Senha"
              type="password"
              placeholder="Digite aqui sua senha"
              register={register("password")}
              error={errors.password && errors.password.message}
            />
            <Input
              id="confirmPassword"
              text="Confirmar senha"
              type="password"
              placeholder="Digite novamente sua senha"
              register={register("confirmPassword")}
              error={errors.confirmPassword && errors.confirmPassword.message}
            />
            <Input
              id="bio"
              text="Bio"
              type="text"
              placeholder="Fale sobre você"
              register={register("bio")}
              error={errors.bio && errors.bio.message}
            />
            <Input
              id="contact"
              text="Contato"
              type="text"
              placeholder="(00) 0000-0000"
              register={register("contact")}
              error={errors.contact && errors.contact.message}
            />
            <Select
              id="course_module"
              text="Selecionar módulo"
              placeholder="Qual seu módulo?"
              register={register("course_module")}
              error={errors.course_module && errors.course_module.message}
              options={optionsCourseModule}
            />

            <Button
              type="submit"
              text={loading ? loading : "Cadastrar"}
              primary
              disabled={!isDirty || !isValid || loading}
            />
          </Form>
        </Container>
      )}
    </>
  );
}
