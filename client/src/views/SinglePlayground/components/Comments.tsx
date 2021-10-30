// DEPENDENCIES
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// COMPONENTS
import Button from 'components/Button';
import Comment from 'components/Comment';
import Form from 'components/Form';
import Input from 'components/Input';

// STYLED COMPONENTS
import { Container, FormContainer, ButtonWrapper, Rating } from '../styles/Comments';

// SCHEMA
import { commentSchema } from 'schemas';

// INTERFACES
import { CommentsProps } from '../types';

const Comments = ({ reviews = [] }: CommentsProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<any>({
    defaultValues: {
      text: '',
    },
    resolver: yupResolver(commentSchema),
    mode: 'onBlur',
  });

  const onSubmit = (formData: { text: string }): void => {
    console.log('submitted comment data: ', formData);
  };

  return (
    <Container>
      {reviews.map((review) => {
        const { author, body, _id } = review;
        return <Comment body={body} key={_id} username={author.username} />;
      })}
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
    </Container>
  );
};

export default Comments;
