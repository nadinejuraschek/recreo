// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { Icon } from './styles/Favorite';

const FavoriteButton = () => {
  const [active, setActive] = useState<boolean>(false);

  return <Icon active={active} onClick={() => setActive(!active)} />;
};

export default FavoriteButton;
