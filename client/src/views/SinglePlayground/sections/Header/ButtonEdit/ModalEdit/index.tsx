import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Form, Input, Modal } from 'components';
import toast from 'react-hot-toast';
import { editPlayground as editPlaygroundFn } from 'api';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AddPlaygroundInputs } from 'views/Playgrounds/sections/AddPlaygroundForm/types';
import { editPlaygroundSchema } from 'schemas';
import { UserContext } from 'context';
import { Playground } from 'types';

export const ModalEdit = ({
  id,
  playground,
  toggleModal,
}: {
  id: string;
  playground: Playground;
  toggleModal: (open: boolean) => void;
}) => {
  const queryClient = useQueryClient();
  const { user } = useContext(UserContext);

  const { mutateAsync } = useMutation({
    mutationFn: async (formData: any) => {
      await editPlaygroundFn(formData);
    },
    onError: (err: any) => {
      toast.error(err?.message ?? 'Something went wrong. Please try again later.');
      throw err;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['playground', id] });
      queryClient.invalidateQueries({ queryKey: ['playgrounds'] });
      toast.success('The playground has been edited successfully.');
      toggleModal(false);
    },
  });

  const defaultValues = {
    description: playground.description,
    images: playground.images.join(','),
    name: playground.title,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AddPlaygroundInputs>({
    defaultValues,
    resolver: yupResolver(editPlaygroundSchema),
    mode: 'onChange',
  });

  const onSubmit = (formData: AddPlaygroundInputs) => {
    if (!user) {
      toast.error('You must be logged in to edit a playground.');
      return;
    }

    const imagesArray = (formData.images || '').split(',').map((img) => img.trim());

    const editedFormData = {
      _id: playground._id,
      description: formData.description,
      images: imagesArray,
      title: formData.name,
    };

    mutateAsync(editedFormData);
  };

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Modal
        closeButton
        footer={
          <Button disabled={!errors || isSubmitting || !isValid} loading={isSubmitting} type="submit">
            Save
          </Button>
        }
        title="Edit Playground"
        toggleModal={toggleModal}
      >
        <Input error={errors?.name?.message} label="Name" name="name" placeholder="Name" register={register} required type="text" />
        <Input
          error={errors?.description?.message}
          label="Description"
          name="description"
          placeholder="Description"
          register={register}
          required={false}
          type="textarea"
        />
        <Input
          error={errors?.images?.message}
          label="Image(s)"
          name="images"
          placeholder="Image URLs (seperated by commas)"
          register={register}
          required
          type="textarea"
        />
      </Modal>
    </Form>
  );
};
