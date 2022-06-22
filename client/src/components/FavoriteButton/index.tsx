// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { Icon } from './styles';

export const FavoriteButton = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);

  return <Icon active={active} onClick={() => setActive(!active)} />;
};
