// DEPENDENCIES
import styled from 'styled-components';

// COMPONENTS
import { Link } from 'react-router-dom';

export const Logo = styled(Link).attrs(() => ({
  className: 'nav-logo',
  to: '/',
}))`
  color: var(--blue__dark);
  font-family: 'Carter One', 'Helvetica', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  margin-right: 2rem;
  text-decoration: none;

  &:hover {
    color: var(--blue__dark);
    cursor: pointer;
  }
`;
