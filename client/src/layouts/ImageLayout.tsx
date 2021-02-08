// COMPONENTS
import Toast from 'components/Toast/Toast';

const ImageLayout = () => {
  return (
    <Toast success handleClose={() => console.log('clicked')}>
      Hello
    </Toast>
  );
};

export default ImageLayout;
