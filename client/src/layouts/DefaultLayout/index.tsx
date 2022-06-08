// STYLED COMPONENTS
import { Main } from './styles/DefaultLayout';

// INTERFACES
import { DefaultLayoutProps } from './types';

export const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => <Main>{children}</Main>;
