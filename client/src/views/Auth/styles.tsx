// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 300px;

  @media only screen and (min-width: 768px) {
    height: calc(100% - 6rem);
    margin: 0;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media only screen and (min-width: 900px) {
    max-width: 500px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormWrapper = styled.div`
  width: 100%;
`;
