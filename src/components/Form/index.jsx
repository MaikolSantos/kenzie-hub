import { Container } from "./styles";

export function Form({ children, title, onSubmit, description }) {
  return (
    <Container onSubmit={onSubmit} noValidate>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {children}
    </Container>
  );
}
