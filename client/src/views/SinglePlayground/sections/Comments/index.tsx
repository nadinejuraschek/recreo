import { Comment, InlineLink } from 'components';
import { CommentForm } from './components/CommentForm';
import { Container, EmptyComments, StyledTitle } from './styles';
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

  const title = rating ? <StyledTitle size="small">{reviews.length} Reviews</StyledTitle> : null;

  const renderComments = useMemo((): JSX.Element[] | null => {
    if (reviews.length === 0) return null;

    return reviews.map((review) => {
      const { _id } = review;

      return <Comment key={_id} playgroundId={playgroundId} review={review} />;
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
