// COMPONENTS
import Comment from 'components/Comment';
import Form from 'components/Form';

// STYLED COMPONENTS
import { Container, FormContainer } from '../styles/Comments';

// INTERFACES
import { CommentsProps } from '../types';

const Comments = ({ reviews = [] }: CommentsProps): JSX.Element => {
  return (
    <Container>
      {reviews.map((review) => {
        const { author, body, _id } = review;
        return <Comment body={body} key={_id} username={author.username} />;
      })}
      <FormContainer>
        <Form comment initialValues={{}} validationSchema={{}} />
      </FormContainer>
    </Container>
  );
};

export default Comments;
