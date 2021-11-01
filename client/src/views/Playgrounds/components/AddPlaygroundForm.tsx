// DEPENDENCIES
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// COMPONENTS
import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';
import Modal from 'components/Modal';
import Selecter from 'components/Selecter';

// STYLED COMPONENTS
import {
  // MultipleInputWrapper,
  PlaygroundWrapper,
} from '../styles/AddPlaygroundForm';

// SCHEMA
import { playgroundSchema } from 'schemas';

// CONTEXT
import { PlaygroundContext } from 'context/PlaygroundContext';

// INTERFACES
import { Amenity } from 'types';
import { AddPlaygroundInputs, AddPlaygroundFormProps } from '../types';

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

const AddPlaygroundForm = ({ setOpenAddPlaygroundModal }: AddPlaygroundFormProps): JSX.Element => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>();
  const { addPlayground } = useContext(PlaygroundContext);

  const defaultValues = {
    description: '',
    location: '',
    // lat: 0.000001,
    // long: 0.000001,
    name: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AddPlaygroundInputs>({
    defaultValues,
    resolver: yupResolver(playgroundSchema),
    mode: 'onChange',
  });

  const onSubmit = (formData: AddPlaygroundInputs): void => {
    if (addPlayground) addPlayground({ ...formData, features: selectedFeatures });
  };

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Modal
        closeButton
        footer={
          <Button $disabled={!isValid || isSubmitting} $filled loading={isSubmitting} $small type="submit">
            Add Playground
          </Button>
        }
        title="New Playground"
        toggleModal={setOpenAddPlaygroundModal}
      >
        <PlaygroundWrapper>
          <Input label="Name" name="name" placeholder="Name" type="text" register={register} error={errors?.name?.message} />
          <Input
            label="Location"
            name="location"
            placeholder="Location"
            type="text"
            register={register}
            error={errors?.location?.message}
          />
          {/* <MultipleInputWrapper>
            <Input
              label="Latitude"
              name="lat"
              placeholder="Latitude"
              step="0.000001"
              type="number"
              register={register}
              error={errors?.lat?.message}
            />
            <Input
              label="Longitude"
              name="long"
              placeholder="Longitude"
              step="0.000001"
              type="number"
              register={register}
              error={errors?.long?.message}
            />
          </MultipleInputWrapper> */}
          <Input
            label="Description"
            name="description"
            placeholder="Description"
            type="textarea"
            register={register}
            error={errors?.description?.message}
          />
          <Selecter handleChange={setSelectedFeatures} label="Features" options={features} placeholder="Features" />
          {/* IMAGE UPLOAD HERE */}
        </PlaygroundWrapper>
      </Modal>
    </Form>
  );
};

export default AddPlaygroundForm;
