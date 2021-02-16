// DEPENDENCIES
import styled from 'styled-components';

export const Container = styled.footer.attrs(() => ({
  className: 'footer',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;

  height: 50px;

  @media only screen and (min-width: 900px) {
    padding: 0 40px;
  }
`;

export const Link = styled.div.attrs(() => ({
  className: 'footer-link',
}))`
  color: var(--blue__dark);
  font-size: 14px;

  a {
    color: var(--blue__dark);
    text-decoration: none;
  }

  a:hover {
    color: var(--orange);
    cursor: pointer;
  }
`;
