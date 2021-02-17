// DEPENDENCIES
import styled, { css } from 'styled-components';

type ContainerProps = {
  navFooter?: boolean;
};

export const Container = styled.footer.attrs(() => ({
  className: 'footer',
}))<ContainerProps>`
  display: none;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  width: 100vw;

  @media only screen and (min-width: 900px) {
    display: flex;
    height: 50px;
    padding: 0 40px;
  }

  ${({ navFooter }) =>
    navFooter &&
    css`
      display: flex;
      justify-content: center;

      position: absolute;
      bottom: 10px;

      z-index: 11;

      .footer-link,
      .footer-link a {
        color: var(--white);
        font-weight: bold;
      }
    `}
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
