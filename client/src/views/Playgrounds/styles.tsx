// DEPENDENCIES
import styled from 'styled-components';

// COMPONENTS
import { Map } from 'components';

// STYLED COMPONENTS
import { ButtonWrapper } from './sections/PlaygroundsList/styles';

export const PlaygroundInfo = styled.div.attrs(() => ({
  className: 'playgrounds-info',
}))`
  background-color: var(--white);
  border: 1px solid var(--white);
  border-radius: 4rem 4rem 0 0;
  padding: 2.4rem;

  @media only screen and (min-width: 900px) {
    padding: 4rem;
  }

  &:hover {
    ${ButtonWrapper} {
      display: flex;
    }
  }
`;

export const Section = styled.section.attrs(() => ({
  className: 'playgrounds-section',
}))`
  margin: 1rem 0 3rem;
  width: 100%;
`;

export const StyledMap = styled(Map)`
  @media only screen and (min-width: 900px) {
    height: 30rem !important;
    width: 100%;

    border-radius: 0.8rem;
  }
`;
