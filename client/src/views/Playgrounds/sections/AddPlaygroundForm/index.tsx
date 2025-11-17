import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddressInput, Button, Form, Input, Modal, Selecter } from 'components';
import { features } from 'data';
import { playgroundSchema } from 'schemas';
import { AddPlaygroundInputs, AddPlaygroundFormProps } from './types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPlayground } from 'api';
import { UserContext } from 'context';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const AddPlaygroundForm = ({ setOpenAddPlaygroundModal }: AddPlaygroundFormProps): JSX.Element => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const { mutate } = useMutation({
    mutationFn: createPlayground,
    onError: () => {
      toast.error('The playground could not be saved. Please try again later.');
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['playgrounds'] });
      toast.success('Your playground was created successfully!');
      navigate(`/playgrounds/${res.data._id}`);
    },
  });

  const defaultValues = {
    description: '',
    images: '',
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

  const onSubmit = (formData: AddPlaygroundInputs): void => {
    const newFormData = {
      author: user?.id,
      description: formData.description,
      features: selectedFeatures,
      images: formData.images,
      location: formData.location,
      title: formData.name,
    };

    mutate(newFormData);
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
        <Input label="Name" name="name" placeholder="Name" required type="text" register={register} error={errors?.name?.message} />
        <AddressInput error={errors?.location?.message} handleSelect={register('location').onChange} placeholder="Location" required />
        <Selecter handleChange={setSelectedFeatures} label="Features" options={features} placeholder="Features" required />
        <Input
          label="Description"
          name="description"
          placeholder="Description"
          type="textarea"
          register={register}
          required={false}
          error={errors?.description?.message}
        />
        <Input
          label="Image(s)"
          name="images"
          placeholder="Image URLs (seperated by commas)"
          type="textarea"
          register={register}
          required
          error={errors?.images?.message}
        />
      </Modal>
    </Form>
  );
};
