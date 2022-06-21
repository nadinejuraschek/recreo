// DEPENDENCIES
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// COMPONENTS
import { AddressInput, Button, Form, Input, Modal, Selecter } from 'components';

// DATA
import { features } from 'data';

// STYLED COMPONENTS
import { PlaygroundWrapper } from '../../styles/AddPlaygroundForm';

// SCHEMA
import { playgroundSchema } from 'schemas';

// CONTEXT
import { PlaygroundContext } from 'context/PlaygroundContext';

// INTERFACES
import { AddPlaygroundInputs, AddPlaygroundFormProps } from '../../types';

export const AddPlaygroundForm = ({ setOpenAddPlaygroundModal }: AddPlaygroundFormProps): JSX.Element => {
  const [location, setLocation] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>();
  const { addPlayground } = useContext(PlaygroundContext);

  const defaultValues = {
    description: '',
    location: '',
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

  console.log(register);

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
          <AddressInput handleSelect={register('location').onChange} placeholder="Location" value={location} />
          <Input
            label="Location"
            name="location"
            placeholder="Location"
            type="text"
            register={register}
            error={errors?.location?.message}
          />
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
