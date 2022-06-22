// STYLED COMPONENTS
import { Main } from './styles';

// INTERFACES
import { DefaultLayoutProps } from './types';

export const DefaultLayout = ({ children, withMainPadding = true }: DefaultLayoutProps): JSX.Element => (
  <Main withMainPadding={withMainPadding}>{children}</Main>
);
