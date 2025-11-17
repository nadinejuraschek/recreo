import { Comment, InlineLink, Title } from 'components';
import { CommentForm } from './components/CommentForm';
import { Container, EmptyComments, SummaryContainer } from './styles';
import { UserContext } from 'context';
import { CommentsProps } from './types';
import { useContext, useMemo } from 'react';

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

  const renderComments = useMemo((): JSX.Element[] | null => {
    if (reviews.length === 0) return null;

    return reviews.map((review) => {
      const { author, body, postedOn, _id, rating } = review;

      return <Comment body={body} key={_id} postedOn={postedOn} rating={rating} username={author.username} />;
    });
  }, [reviews]);

  return (
    <Container>
      {title}
      {!user && logInToViewComments}
      {renderComments}
      {user && <CommentForm playgroundId={playgroundId} />}
    </Container>
  );
};
