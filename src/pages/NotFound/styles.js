import styled from 'styled-components';
import { ContainerMain } from '../../styles/Containers'

export const Container = styled(ContainerMain)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  height: 100vh;
  color: var(--color-grey-0);
`