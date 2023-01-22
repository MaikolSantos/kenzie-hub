import styled, { css } from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: 0.2s;

  padding: ${({ type }) => (type === "icon" ? "0 0.5rem" : "0 1.375rem")};

  height: ${({ height }) => (height === "medium" ? "2rem" : "3rem")};

  background-color: ${({ primary }) =>
    primary ? "var(--color-primary)" : "var(--color-grey-1)"};

  :hover {
    background-color: ${({ primary }) =>
      primary ? "var(--color-primary-focus)" : "var(--color-grey-2)"};
  }

  :disabled {
    background-color: var(--color-primary-negative);
    cursor: not-allowed;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1.375rem;

  button {
    :last-child {
      width: fit-content;
    }
  }
`;
