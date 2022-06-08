// STYLED COMPONENTS
import { ExternalLink, InAppLink } from './styles/InlineLink';

// INTERFACES
import { InlineLinkProps } from './types';

export const InlineLink = ({ children, href, to }: InlineLinkProps): JSX.Element => {
  return (
    <>
      {href && <ExternalLink href={to}>{children}</ExternalLink>}
      {to && <InAppLink to={to}>{children}</InAppLink>}
    </>
  );
};
