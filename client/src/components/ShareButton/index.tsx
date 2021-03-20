// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { Icon } from './styles/ShareButton';

const ShareButton = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return <Icon onClick={() => setOpenDropdown(!openDropdown)} />;
};

export default ShareButton;
