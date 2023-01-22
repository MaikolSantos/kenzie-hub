import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { ContainerMain } from "../../styles/Containers";
import { HeaderSection, Nav } from "./styles";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

import Techs from "../../components/Techs";

export function Dashboard() {
  const { user, userLogout, getUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const idUser = localStorage.getItem("@USERID");

    !idUser && navigate("/");

    try {
      getUser(idUser);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section>
      <Nav>
        <ContainerMain>
          <Header>
            <Button onClick={userLogout} text="Sair" height="medium" />
          </Header>
        </ContainerMain>
      </Nav>

      <HeaderSection>
        <ContainerMain>
          {user && (
            <>
              <h1>Olá, {user.name}</h1>
              <p>{user.course_module}</p>
            </>
          )}
        </ContainerMain>
      </HeaderSection>
      <Techs />
    </section>
  );
}
