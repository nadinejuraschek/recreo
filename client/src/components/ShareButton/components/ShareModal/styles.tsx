// DEPENDENCIES
import styled from 'styled-components';

// ICONS
import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Mail } from 'assets/mail.svg';
import { ReactComponent as Twitter } from 'assets/twitter.svg';
import { ReactComponent as Whatsapp } from 'assets/whatsapp.svg';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 100%;
  padding: 2.4rem 0;
`;

export const FacebookIcon = styled(Facebook)`
  color: #4267b2;
  cursor: pointer;

  height: 5rem;
  width: 5rem;

  &:hover {
    color: var(--orange);
  }
`;

export const MailIcon = styled(Mail)`
  color: var(--yellow);
  cursor: pointer;

  height: 5rem;
  width: 5rem;

  &:hover {
    color: var(--orange);
  }
`;

export const TwitterIcon = styled(Twitter)`
  color: #1da1f2;
  cursor: pointer;

  height: 5rem;
  width: 5rem;

  &:hover {
    color: var(--orange);
  }
`;

export const WhatsappIcon = styled(Whatsapp)`
  color: #25d366;
  cursor: pointer;

  height: 5rem;
  width: 5rem;

  &:hover {
    color: var(--orange);
  }
`;
