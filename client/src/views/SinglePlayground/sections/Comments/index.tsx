// DEPENDENCIES
import { useContext } from 'react';

// COMPONENTS
import { Comment, InlineLink, Title } from 'components';
import { CommentForm } from './components/CommentForm';

// STYLED COMPONENTS
import { Container, EmptyComments, SummaryContainer } from './styles';

// CONTEXT
import { UserContext } from 'context';

// INTERFACES
import { CommentsProps } from './types';

export const Comments = ({ playgroundId, rating, reviews = [] }: CommentsProps): JSX.Element => {
  const { user } = useContext(UserContext);

  const logInToViewComments = (
    <EmptyComments>
      <InlineLink to="/login">Login</InlineLink> to leave a review.
    </EmptyComments>
  );

  const title = rating ? (
    <SummaryContainer>
      <Title>{reviews.length} Reviews</Title>
    </SummaryContainer>
  ) : null;

  const renderComments = (): JSX.Element[] | null => {
    if (reviews.length === 0) return null;

    return reviews.map((review) => {
      const { author, body, postedOn, _id, rating } = review;

      return <Comment body={body} key={_id} postedOn={postedOn} rating={rating} username={author.username} />;
    });
  };

  return (
    <Container>
      {title}
      {!user && logInToViewComments}
      {renderComments()}
      {user && <CommentForm playgroundId={playgroundId} />}
    </Container>
  );
};
