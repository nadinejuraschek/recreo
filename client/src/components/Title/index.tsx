import { StyledTitle } from './styles';
import { TitleProps } from './types';

export const Title = ({
  children,
  className = '',
  color = 'var(--blue_700)',
  size = 'medium',
  marginBottom = 2,
}: TitleProps): JSX.Element => (
  <StyledTitle className={className} color={color} marginBottom={marginBottom} size={size}>
    {children}
  </StyledTitle>
);
