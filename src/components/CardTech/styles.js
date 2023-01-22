import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-grey-4);
  padding: 0 1rem;
  border-radius: var(--border-radius);
  gap: 0.5rem;
  transition: 0.2s ease;

  p {
    flex-grow: 1;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    padding: 1rem 0;
  }

  span {
    font-size: 0.75rem;
    color: var(--color-grey-1);
  }

  button {
    padding: 0;
    height: max-content;
    background-color: transparent;
    width: 0.75rem;

    :hover {
      background-color: transparent;
      color: var(--color-grey-1);
    }
  }

  :hover {
    background-color: var(--color-grey-2);
  }
`;
