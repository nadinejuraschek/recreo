import { ChangeEvent, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Input } from 'components';
import { ButtonWrapper, FormHeader, RaterLabel, RaterWrapper } from './styles';
import { commentSchema } from 'schemas';
import { UserContext } from 'context';
import { CommentFormProps } from './types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReview } from 'api';
import toast from 'react-hot-toast';
import { Rating as RatingComp } from '@smastrom/react-rating';

export const CommentForm = ({ playgroundId }: CommentFormProps): JSX.Element => {
  const [rating, setRating] = useState(0); // initial rating value

  const { user } = useContext(UserContext);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createReview,
    onError: (error) => {
      console.log('LOG error: ', error);
      toast.error('Your review could not be submitted. Please try again later.');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['playground', playgroundId] });
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
    if (!user) {
      toast.error('You must be logged in to submit a review.');
      return;
    }

    const newFormData = {
      author: user?.id,
      body: formData.text,
      rating,
      playgroundId,
    };
    mutate(newFormData);
  };

  return (
    <Form handleSubmit={handleSubmit(onSubmit)} alignLeft>
      <FormHeader>
        <RaterWrapper>
          <RaterLabel>Your Rating: </RaterLabel>
          <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setRating(+e.target?.value)}>
            <option value={1}>⭐️</option>
            <option value={2}>⭐️⭐️</option>
            <option value={3}>⭐️⭐️⭐️</option>
            <option value={4}>⭐️⭐️⭐️⭐️</option>
            <option value={5}>⭐️⭐️⭐️⭐️⭐️</option>
          </select>
          <RatingComp isRequired onChange={setRating} style={{ maxWidth: 180 }} value={rating} />
          {/* RATING COMPONENT GOES HERE */}
          {/* <Rater
            emptySymbol={<RatingIcon color="var(--blue__opaque)" />}
            fullSymbol={<RatingIcon />}
            initialRating={rating}
            onClick={handleRating}
            stop={5}
          /> */}
        </RaterWrapper>
        <ButtonWrapper>
          <Button disabled={!isValid || isSubmitting} loading={isSubmitting} type="submit">
            Add Comment
          </Button>
        </ButtonWrapper>
      </FormHeader>
      <Input
        name="text"
        placeholder="Tell us about your playground experience..."
        type="textarea"
        register={register}
        error={errors?.text?.message}
      />
    </Form>
  );
};
