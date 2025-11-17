import { ChangeEvent, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// TODO: Find rating library that is compatible with React 18
// import Rater from 'react-rating';
import { Button, Form, Input } from 'components';
import { FormContainer, ButtonWrapper, RaterLabel, RaterWrapper } from './styles';
// import { RatingIcon } from 'components/Rating/styles';
import { commentSchema } from 'schemas';
import { UserContext } from 'context';
import { CommentFormProps } from './types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview } from 'api';
import toast from 'react-hot-toast';

export const CommentForm = ({ playgroundId }: CommentFormProps): JSX.Element => {
  const [rating, setRating] = useState(0); // initial rating value

  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['playground'] });
      toast.success('Your review has been saved.');
    },
  });

  const defaultValues = {
    text: '',
    rating: 0,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<any>({
    defaultValues,
    resolver: yupResolver(commentSchema),
    mode: 'onBlur',
  });

  const onSubmit = (formData: { text: string }): void => {
    const newFormData = {
      author: user?.id,
      body: formData.text,
      rating,
    };
    mutate({ ...newFormData, playgroundId });
  };

  return (
    <FormContainer>
      <Form handleSubmit={handleSubmit(onSubmit)} alignLeft>
        <RaterWrapper>
          <RaterLabel>Your Rating: </RaterLabel>
          <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setRating(+e.target?.value)}>
            <option value={1}>⭐️</option>
            <option value={2}>⭐️⭐️</option>
            <option value={3}>⭐️⭐️⭐️</option>
            <option value={4}>⭐️⭐️⭐️⭐️</option>
            <option value={5}>⭐️⭐️⭐️⭐️⭐️</option>
          </select>
          {/* RATING COMPONENT GOES HERE */}
          {/* <Rater
            emptySymbol={<RatingIcon color="var(--blue__opaque)" />}
            fullSymbol={<RatingIcon />}
            initialRating={rating}
            onClick={handleRating}
            stop={5}
          /> */}
        </RaterWrapper>
        <Input
          name="text"
          placeholder="Tell us about your playground experience..."
          type="textarea"
          register={register}
          error={errors?.text?.message}
        />
        <ButtonWrapper>
          <Button $disabled={!isValid || isSubmitting} $filled loading={isSubmitting} $small type="submit">
            Add Comment
          </Button>
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};
