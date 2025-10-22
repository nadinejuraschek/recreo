// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const HoverItem = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;

  background-color: var(--white);
  border-radius: 0.8rem;
  box-shadow: 0 2px 6px var(--shadow__sm);
  font-size: 1.6rem;
  padding: 1rem;

  z-index: 5;
`;
