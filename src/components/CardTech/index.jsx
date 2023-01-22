import { FaTrashAlt } from "react-icons/fa";
import { Button } from "../Button";
import { Container } from "./styles";

export function CardTech({ title, status, onClickTech, onClickTrash }) {
  return (
    <Container>
      <p onClick={onClickTech}>{title}</p>
      <span>{status}</span>
      <Button text={<FaTrashAlt />} type="icon" onClick={onClickTrash} />
    </Container>
  );
}
