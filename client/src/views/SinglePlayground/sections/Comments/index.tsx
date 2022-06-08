// DEPENDENCIES
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// COMPONENTS
import { Button, Comment, Form, InlineLink, Input } from 'components';

// STYLED COMPONENTS
import { Container, EmptyComments, FormContainer, ButtonWrapper, Rating } from '../../styles/Comments';

// SCHEMA
import { commentSchema } from 'schemas';

// CONTEXT
import { UserContext } from 'context/UserContext';

// INTERFACES
import { CommentsProps } from '../../types';

export const Comments = ({ reviews = [] }: CommentsProps): JSX.Element => {
  const { user } = useContext(UserContext);

  const defaultValues = {
    text: '',
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
    console.log('submitted comment data: ', formData);
  };

  return (
    <Container>
      {reviews.length === 0 ? (
        <EmptyComments>
          <InlineLink to="/login">Login</InlineLink> to leave a review.
        </EmptyComments>
      ) : (
        reviews.map((review) => {
          const { author, body, _id } = review;
          return <Comment body={body} key={_id} username={author.username} />;
        })
      )}
      {user && (
        <FormContainer>
          <Form handleSubmit={handleSubmit(onSubmit)}>
            <Rating>⭐⭐⭐⭐⭐</Rating>
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
