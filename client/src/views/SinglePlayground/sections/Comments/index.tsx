// DEPENDENCIES
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Rating as Rater } from 'react-simple-star-rating';

// COMPONENTS
import { Button, Comment, Form, InlineLink, Input, Title } from 'components';

// STYLED COMPONENTS
import { Container, EmptyComments, FormContainer, ButtonWrapper, RaterLabel, RaterWrapper, SummaryContainer } from '../../styles/Comments';

// SCHEMA
import { commentSchema } from 'schemas';

// CONTEXT
import { PlaygroundContext, UserContext } from 'context';

// HOOKS
import { usePlayground } from 'hooks/usePlayground';

// INTERFACES
import { CommentsProps } from '../../types';

// STYLING

export const Comments = ({ reviews = [] }: CommentsProps): JSX.Element => {
  const [rating, setRating] = useState(0); // initial rating value

  const { addReview } = useContext(PlaygroundContext);
  const { user } = useContext(UserContext);

  const { playground } = usePlayground();

  const handleRating = (rate: number): void => {
    setRating(rate * 0.05);
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

  const onSubmit = (formData: { body: string }): void => {
    if (addReview && playground) addReview({ ...formData, rating }, playground._id);
  };

  return (
    <Container>
      {playground?.rating && (
        <SummaryContainer>
          <Title>{playground?.reviews.length} Reviews</Title>
        </SummaryContainer>
      )}
      {!user ? (
        <EmptyComments>
          <InlineLink to="/login">Login</InlineLink> to leave a review.
        </EmptyComments>
      ) : (
        reviews.map((review) => {
          const { author, body, postedOn, _id, rating } = review;

          return <Comment body={body} key={_id} postedOn={postedOn} rating={rating} username={author.username} />;
        })
      )}
      {user && (
        <FormContainer>
          <Form handleSubmit={handleSubmit(onSubmit)} alignLeft>
            <RaterWrapper>
              <RaterLabel>Your Rating: </RaterLabel>
              <Rater allowHalfIcon onClick={handleRating} ratingValue={rating} />
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
      )}
    </Container>
  );
};
