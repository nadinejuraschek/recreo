import { ExternalLink, InAppLink } from './styles';
import { InlineLinkProps } from './types';

export const InlineLink = ({ children, href, to }: InlineLinkProps): JSX.Element => (
  <>
    {href && <ExternalLink href={to}>{children}</ExternalLink>}
    {to && <InAppLink to={to}>{children}</InAppLink>}
  </>
);
