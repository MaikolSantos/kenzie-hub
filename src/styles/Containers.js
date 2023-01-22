import styled from 'styled-components';

export const ContainerMain = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 0 0.75rem;
  max-width: 48.75rem;
`

export const ContainerPageForm = styled(ContainerMain)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-width: 23.125rem;
  padding-bottom: 1rem;

  div {
    margin-top: 1rem;
    width: 100%;

    p {
      font-weight: 600;
      font-size: 0.75rem;
      color: var(--color-grey-1);
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;
