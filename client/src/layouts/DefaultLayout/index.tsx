// STYLED COMPONENTS
import { Main } from './styles/DefaultLayout';

interface DefaultLayoutProps {
  children: any;
}

const Defaultlayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Defaultlayout;
