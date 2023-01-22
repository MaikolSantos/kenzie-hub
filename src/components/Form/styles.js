import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.125rem;
  padding: 2.125rem 1.125rem;
  background-color: var(--color-grey-3);
  border-radius: var(--border-radius);
  width: 100%;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-grey-0);
  }

  p {
    font-size: 0.75rem;
    color: var(--color-grey-1);
    margin: 0.5rem 0;
    font-weight: 500;
  }

  button {
    width: 100%;
  }
`;
