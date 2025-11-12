import { useState } from 'react';
import { formatDistance } from 'date-fns';
import { Rating } from 'components';
import { Container, Header, Name, PostDetails, ReadMore, TextContainer, TimePosted, VerticalDivider } from './styles';
import { trimBodyAtWordEnd } from 'utils';
import { CommentProps } from './types';

export const Comment = ({ body = '', postedOn, rating = 0, username = '' }: CommentProps): JSX.Element => {
  const [showFullComment, setShowFullComment] = useState(false);

  const timePosted = formatDistance(new Date(postedOn), new Date(), { addSuffix: true });

  const onReadMore = (): void => setShowFullComment(!showFullComment);

  const trimmedBody = (
    <>
      <p>{trimBodyAtWordEnd(body.substring(0, 120))}</p>{' '}
      <ReadMore className="comments-read-more" onClick={onReadMore}>
        Read More
      </ReadMore>
    </>
  );

  return (
    <Container className="comments-item">
      <Header className="comments-header">
        <Rating rating={rating} />
      </Header>
      <TextContainer className="comments-text">{showFullComment || body.length <= 120 ? body : trimmedBody}</TextContainer>
      <PostDetails className="comments-post-details">
        <Name className="comments-name">by {username}</Name>
        <VerticalDivider className="comments-vertical-divider">∙</VerticalDivider>
        <TimePosted className="comments-time-posted">{timePosted}</TimePosted>
      </PostDetails>
    </Container>
  );
};
