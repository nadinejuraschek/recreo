// DEPENDENCIES
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';

// STYLED COMPONENTS
import { Content, FacebookIcon, MailIcon, TwitterIcon, WhatsappIcon } from './styles';

export const ShareModal = (): JSX.Element => (
  <Content>
    <FacebookShareButton url="https://www.example.com" quote="Playground" hashtag="#playground">
      <FacebookIcon />
    </FacebookShareButton>
    <TwitterShareButton url="https://www.example.com" title="Playground" hashtags={['#playground']}>
      <TwitterIcon />
    </TwitterShareButton>
    <WhatsappShareButton url="https://www.example.com" title="Playground" separator=" ">
      <WhatsappIcon />
    </WhatsappShareButton>
    <EmailShareButton url="https://www.example.com" subject="Playground" body="Check out this playground!" separator=" ">
      <MailIcon />
    </EmailShareButton>
  </Content>
);
