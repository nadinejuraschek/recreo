// STYLED COMPONENTS
import { LargeTitle, MediumTitle, SmallTitle } from './styles/Title';

interface TitleProps {
  children: any;
  color?: string;
  size?: string;
}

const Title: React.FC<TitleProps> = ({ children, color = 'var(--blue__dark)', size = 'medium' }) => {
  return (
    <>
      {size === 'large' && <LargeTitle color={color}>{children}</LargeTitle>}
      {size === 'medium' && <MediumTitle color={color}>{children}</MediumTitle>}
      {size === 'small' && <SmallTitle color={color}>{children}</SmallTitle>}
    </>
  );
};

export default Title;
