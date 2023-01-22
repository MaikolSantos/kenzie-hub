import styled from "styled-components";

export const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  color: var(--color-grey-0);
  position: relative;
  width: 100%;
  
  label {
    font-size: 0.75rem;
  }
  
  input {
    width: 100%;
    margin-top: .75rem;
    padding: 0.8125rem 1rem;
    background-color: var(--color-grey-2);
    border: 0.0625rem solid transparent;
    border-radius: var(--border-radius);
    outline: none;
    color: var(--color-grey-0);
    font-size: 1rem;

    border-color: ${({ error }) =>
      error ? "var(--color-negative)" : "transparent"};

    :focus {
      border-color: var(--color-grey-0);
    }

    :disabled {
      color: var(--color-grey-1);
      cursor: not-allowed;
    }
  }

  input + button {
    position: absolute;
    top: ${({error}) => error ? '42%' : '52%'};
    right: 1rem;
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-2);
    border: none;
    outline: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--color-grey-1);
  }

  small {
    display: inline-block;
    margin-top: 0.5rem;
    color: var(--color-negative);
    font-size: 0.625rem;
    font-weight: 600;
  }
`;
