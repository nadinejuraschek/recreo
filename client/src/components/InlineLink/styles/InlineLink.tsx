// DEPENDENCIES
import styled from 'styled-components';

// COMPONENTS
import { Link } from 'react-router-dom';

export const InAppLink = styled(Link).attrs(() => ({
  className: 'inlineLink-inAppLink',
}))`
  color: var(--yellow);
  font-family: inherit;
  font-size: inherit;
  font-weight: normal;
  text-decoration: none;

  &:hover {
    color: var(--yellow);
    font-weight: bold;
  }
`;

export const ExternalLink = styled.a.attrs(() => ({
  className: 'inlineLink-inAppLink',
}))`
  color: var(--yellow);
  font-family: inherit;
  font-size: inherit;
  font-weight: normal;
  text-decoration: none;

  &:hover {
    color: var(--yellow);
    font-weight: bold;
  }
`;
