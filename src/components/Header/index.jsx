import { Container } from "./styles";

import logo from "../../assets/images/logo.png";

export function Header({ children }) {
  return (
    <Container>
      <img src={logo} alt="Kenzie Hub Logo" />
      {children}
    </Container>
  );
}
