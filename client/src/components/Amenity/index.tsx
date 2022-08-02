// STYLED COMPONENTS
import { Container, Icon, IconWrapper } from './styles';

// INTERFACES
import { Amenity as AmenityType } from 'types';
import { AmenityProps } from './types';

// DATA
import { features } from 'data';

// ICONS
import { ReactComponent as Bench } from 'assets/bench.svg';
import { ReactComponent as ClimbingWall } from 'assets/climbingWall.svg';
import { ReactComponent as DrinkingFountain } from 'assets/drinkingFountain.svg';
import { ReactComponent as Field } from 'assets/field.svg';
import { ReactComponent as MonkeyBars } from 'assets/monkeyBars.svg';
import { ReactComponent as Playground } from 'assets/playground.svg';
import { ReactComponent as Restrooms } from 'assets/restrooms.svg';
import { ReactComponent as Sandbox } from 'assets/sandbox.svg';
import { ReactComponent as Slide } from 'assets/slide.svg';
import { ReactComponent as Sprinkler } from 'assets/sprinkler.svg';
import { ReactComponent as Sun } from 'assets/sun.svg';
import { ReactComponent as Swing } from 'assets/swing.svg';
import { ReactComponent as Toddler } from 'assets/toddler.svg';

export const Amenity = ({ feature, small }: AmenityProps): JSX.Element => {
  const selectedFeature = features.find((item: AmenityType) => item.value === feature);

  let iconToDisplay;
  switch (feature) {
    case 'basketball':
      iconToDisplay = null;
      break;
    case 'bench':
      iconToDisplay = <Bench />;
      break;
    case 'climbingWall':
      iconToDisplay = <ClimbingWall />;
      break;
    case 'drinkingFountain':
      iconToDisplay = <DrinkingFountain />;
      break;
    case 'grass':
      iconToDisplay = null;
      break;
    case 'monkeyBars':
      iconToDisplay = <MonkeyBars />;
      break;
    case 'playStructure':
      iconToDisplay = <Playground />;
      break;
    case 'restrooms':
      iconToDisplay = <Restrooms />;
      break;
    case 'sandbox':
      iconToDisplay = <Sandbox />;
      break;
    case 'slide':
      iconToDisplay = <Slide />;
      break;
    case 'sprinklers':
      iconToDisplay = <Sprinkler />;
      break;
    case 'soccer':
      iconToDisplay = <Field />;
      break;
    case 'sunProtection':
      iconToDisplay = <Sun />;
      break;
    case 'swingset':
      iconToDisplay = <Swing />;
      break;
    case 'toddlerSafe':
      iconToDisplay = <Toddler />;
      break;
    default:
      iconToDisplay = <Playground />;
  }

  return (
    <Container>
      <IconWrapper small={small}>
        <Icon small={small}>{iconToDisplay}</Icon>
      </IconWrapper>
      {small ? null : selectedFeature?.name}
    </Container>
  );
};
