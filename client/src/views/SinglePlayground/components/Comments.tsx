// COMPONENTS
import Comment from 'components/Comment';
import Form from 'components/Form';

// STYLED COMPONENTS
import { Container, FormContainer } from '../styles/Comments';

const Comments = () => {
  return (
    <Container>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <FormContainer>
        <Form comment initialValues={{}} validationSchema={{}} />
      </FormContainer>
    </Container>
  );
};

export default Comments;
