import styled from "styled-components";

export const Nav = styled.nav`
  padding: 1.25rem 0;
  border-bottom: 0.0625rem solid var(--color-grey-3);

  header {
    margin: 0;
  }
`;

export const HeaderSection = styled.header`
  padding: 2.8125rem 0;
  border-bottom: 0.0625rem solid var(--color-grey-3);

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.625rem;
    flex-wrap: wrap;

    h1 {
      font-size: 1.125rem;
      color: var(--color-grey-0);
    }

    p {
      font-size: 0.75rem;
      color: var(--color-grey-1);
    }
  }
`;
