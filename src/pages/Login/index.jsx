import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";

import { schema } from "./validationSchema";

import { ContainerPageForm } from "../../styles/Containers";

export function Login() {
  const { loadingPage, loading, userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  return (
    <>
      {loadingPage ? (
        <p>{loadingPage}</p>
      ) : (
        <ContainerPageForm>
          <Header />

          <Form title="Login" onSubmit={handleSubmit(userLogin)}>
            <Input
              id="email"
              text="Email"
              type="email"
              placeholder="Digite seu email"
              register={register("email")}
              error={errors.email && errors.email.message}
            />
            <Input
              id="password"
              text="Senha"
              type="password"
              placeholder="Digite sua senha"
              register={register("password")}
              error={errors.password && errors.password.message}
            />

            <Button
              type="submit"
              text={loading ? loading : "Entrar"}
              primary
              disabled={!isDirty || !isValid || loading}
            />

            <div>
              <p>Ainda não possuí conta?</p>
              <Link to="/register">
                <Button type="button" text="Cadastre-se" />
              </Link>
            </div>
          </Form>
        </ContainerPageForm>
      )}
    </>
  );
}
