// STYLED COMPONENTS
import { StyledTitle } from './styles/Title';

// INTERFACES
import { TitleProps } from './types';

export const Title = ({ children, color = 'var(--blue__dark)', size = 'medium', marginBottom = 2 }: TitleProps): JSX.Element => {
  return (
    <StyledTitle color={color} marginBottom={marginBottom} size={size}>
      {children}
    </StyledTitle>
  );
};
