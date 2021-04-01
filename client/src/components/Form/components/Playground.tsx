// COMPONENTS
import Input from 'components/Input';
import Selecter from 'components/Selecter';

// STYLED COMPONENTS
import { PlaygroundWrapper } from '../styles/Form';

// INTERFACES
import { PlaygroundFeature } from 'interfaces';
interface PlaygroundFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const features: PlaygroundFeature[] = [
  { name: 'Basketball Court', value: 'basketball' },
  { name: 'Climbing Wall or Structure', value: 'climbingWall' },
  { name: 'Drinking Fountain', value: 'drinkingFountain' },
  { name: 'Grassy Area', value: 'grass' },
  { name: 'Monkey Bars', value: 'monkeyBars' },
  { name: 'Restrooms', value: 'restrooms' },
  { name: 'Sandbox', value: 'sandbox' },
  { name: 'Seating or Picnic Area', value: 'seating' },
  { name: 'Slide', value: 'slide' },
  { name: 'Soccer Field', value: 'soccer' },
  { name: 'Sprinklers', value: 'sprinklers' },
  { name: 'Sun Protection', value: 'sunProtection' },
  { name: 'Swingset', value: 'swingset' },
  { name: 'Toddler Safe', value: 'toddlerSafe' },
];

const PlaygroundForm: React.FC<PlaygroundFormProps> = ({ errors, isValid, setFieldValue }) => {
  return (
    <PlaygroundWrapper>
      <Input placeholder="Name" type="text" handleChange={setFieldValue} error={errors.name} />
      <Input placeholder="Description" type="textarea" handleChange={setFieldValue} error={errors.description} />
      <Selecter options={features} placeholder="Features" />
    </PlaygroundWrapper>
  );
};

export default PlaygroundForm;
