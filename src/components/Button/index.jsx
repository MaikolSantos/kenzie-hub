import { Container } from "./styles";

export function Button({ text, height, primary, disabled, type, onClick }) {
  return (
    <Container
      type={type}
      height={height}
      primary={primary}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Container>
  );
}
