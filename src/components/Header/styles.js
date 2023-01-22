import styled from "styled-components";

export const Container = styled.header`
  margin-bottom: 2.1875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;

  :has(button) {
    justify-content: space-between;
  }
`;
