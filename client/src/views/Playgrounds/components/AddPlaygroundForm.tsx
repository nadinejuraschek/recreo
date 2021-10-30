// DEPENDENCIES
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// COMPONENTS
import Form from 'components/Form';
import Input from 'components/Input';
import Selecter from 'components/Selecter';

// STYLED COMPONENTS
import { PlaygroundWrapper } from '../styles/AddPlaygroundForm';

// SCHEMA
import { playgroundSchema } from 'schemas';

// INTERFACES
import { Amenity } from 'types';

const features: Amenity[] = [
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

const AddPlaygroundForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<any>({
    defaultValues: {
      name: '',
      description: '',
      features: [],
    },
    resolver: yupResolver(playgroundSchema),
    mode: 'onBlur',
  });

  const onSubmit = (formData: { name: string; description: string; features: string[] }): void => {
    console.log('submitted playground data: ', formData);
  };

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <PlaygroundWrapper>
        <Input name="name" placeholder="Name" type="text" register={register} error={errors?.name?.message} />
        <Input name="description" placeholder="Description" type="textarea" register={register} error={errors?.description?.message} />
        <Selecter options={features} placeholder="Features" />
      </PlaygroundWrapper>
    </Form>
  );
};

export default AddPlaygroundForm;
