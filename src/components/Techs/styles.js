import styled from "styled-components";
import { ContainerMain } from "../../styles/Containers";

export const ContainerTechs = styled(ContainerMain)`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1.375rem 0.5rem;
    background-color: var(--color-grey-3);
    border-radius: var(--border-radius);
  }

  li {
    
  }
`;
