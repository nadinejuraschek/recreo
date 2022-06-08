// STYLED COMPONENTS
import { Icon, Container } from './styles/Amenity';

// INTERFACES
import { AmenityProps } from './types';

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

export const Amenity = ({ icon }: AmenityProps): JSX.Element => {
  let iconToDisplay;
  switch (icon) {
    case 'bench':
      iconToDisplay = <Bench />;
      break;
    case 'climbingWall':
      iconToDisplay = <ClimbingWall />;
      break;
    case 'drinkingFountain':
      iconToDisplay = <DrinkingFountain />;
      break;
    case 'field':
      iconToDisplay = <Field />;
      break;
    case 'monkeyBars':
      iconToDisplay = <MonkeyBars />;
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
    case 'sprinkler':
      iconToDisplay = <Sprinkler />;
      break;
    case 'sun':
      iconToDisplay = <Sun />;
      break;
    case 'swing':
      iconToDisplay = <Swing />;
      break;
    case 'toddler':
      iconToDisplay = <Toddler />;
      break;
    default:
      iconToDisplay = <Playground />;
  }

  return (
    <Container>
      <Icon>{iconToDisplay}</Icon>
    </Container>
  );
};
