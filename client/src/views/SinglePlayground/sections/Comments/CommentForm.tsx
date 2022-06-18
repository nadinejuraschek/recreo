// DEPENDENCIES
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Rater from 'react-rating';

// COMPONENTS
import { Button, Form, Input } from 'components';

// STYLED COMPONENTS
import { FormContainer, ButtonWrapper, RaterLabel, RaterWrapper } from '../../styles/Comments';
import { RatingIcon } from 'components/Rating/styles/Rating';

// SCHEMA
import { commentSchema } from 'schemas';

// CONTEXT
import { PlaygroundContext, ReviewFormData } from 'context';
import { CommentFormProps } from './types';

export const CommentForm = ({ playgroundId }: CommentFormProps): JSX.Element => {
  const [rating, setRating] = useState(0); // initial rating value

  const { addReview } = useContext(PlaygroundContext);

  const handleRating = (rate: number): void => {
    setRating(rate);
  };

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
    const newFormData: ReviewFormData = {
      rating,
      text: formData.text,
    };
    if (addReview) addReview(newFormData, playgroundId);
  };

  return (
    <FormContainer>
      <Form handleSubmit={handleSubmit(onSubmit)} alignLeft>
        <RaterWrapper>
          <RaterLabel>Your Rating: </RaterLabel>
          <Rater
            emptySymbol={<RatingIcon color="var(--blue__opaque)" />}
            fullSymbol={<RatingIcon />}
            initialRating={rating}
            onClick={handleRating}
            stop={5}
          />
        </RaterWrapper>
        <Input
          name="text"
          placeholder="Tell us about your playground experience..."
          type="textarea"
          register={register}
          error={errors?.text?.message}
        />
        <ButtonWrapper>
          <Button $disabled={isValid || isSubmitting} $filled loading={isSubmitting} $small type="submit">
            Add Comment
          </Button>
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};
