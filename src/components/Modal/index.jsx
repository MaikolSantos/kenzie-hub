import { Button } from "../Button";
import { Container, Wrapper } from "./styles";
import { MdClose } from "react-icons/md";

export function Modal({ children, title, onClick }) {
  return (
    <Wrapper>
      <Container>
        <header>
          <h2>{title}</h2>
          <Button
            text={<MdClose />}
            type="icon"
            height="medium"
            onClick={onClick}
          />
        </header>

        {children}
      </Container>
    </Wrapper>
  );
}
