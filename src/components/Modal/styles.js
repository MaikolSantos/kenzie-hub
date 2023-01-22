import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: var(--color-bg-transparent);
  backdrop-filter: blur(2px);
  padding: 0.75rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 23.125rem;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-2);
    padding: 0.75rem 1.25rem;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);

    h2 {
      color: var(--color-grey-0);
      font-weight: 600;
      font-size: 0.875rem;
    }

    button {
      background: transparent;
      color: var(--color-grey-1);

      :hover {
        color: var(--color-grey-0);
      }
    }
  }

  form {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
