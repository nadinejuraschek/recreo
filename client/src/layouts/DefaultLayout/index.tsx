// STYLED COMPONENTS
import { Main } from './styles/DefaultLayout';

// INTERFACES
import { DefaultLayoutProps } from './types';

const Defaultlayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return <Main>{children}</Main>;
};

export default Defaultlayout;
