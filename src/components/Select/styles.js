import styled from "styled-components";
// import arrow from '../../assets/images/arrow'

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

  select {
    width: 100%;
    margin-top: 0.75rem;
    padding: 0.8125rem 1rem;
    background-color: var(--color-grey-2);
    border: 0.0625rem solid transparent;
    border-radius: var(--border-radius);
    outline: none;
    color: var(--color-grey-0);
    font-size: 1rem;
    appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg fill='grey' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: calc(100% - 1rem);
    background-position-y: 50%;

    border-color: ${({ error }) =>
      error ? "var(--color-negative)" : "transparent"};

    :focus {
      border-color: var(--color-grey-0);
    }

    :after {
    }
  }

  small {
    display: inline-block;
    margin-top: 0.5rem;
    color: var(--color-negative);
    font-size: 0.625rem;
    font-weight: 600;
  }
`;
