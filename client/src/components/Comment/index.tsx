// DEPENDENCIES
import { useState } from 'react';
import { formatDistance } from 'date-fns';

// COMPONENTS
import { Rating } from 'components';

// STYLED COMPONENTS
import { Container, Header, Name, PostDetails, ReadMore, TextContainer, TimePosted, VerticalDivider } from './styles/Comment';

// UTILS
import { trimBodyAtWordEnd } from 'utils';

// INTERFACES
import { CommentProps } from './types';

export const Comment = ({ body = '', postedOn, rating = 0, username = '' }: CommentProps): JSX.Element => {
  const [showFullComment, setShowFullComment] = useState(false);

  const timePosted = formatDistance(new Date(postedOn), new Date(), { addSuffix: true });

  const onReadMore = (): void => setShowFullComment(!showFullComment);

  const trimmedBody = (
    <>
      <p>{trimBodyAtWordEnd(body.substring(0, 120))}</p> <ReadMore onClick={onReadMore}>Read More</ReadMore>
    </>
  );

  return (
    <Container>
      <Header>
        <Rating rating={rating} />
      </Header>
      <TextContainer>{showFullComment || body.length <= 120 ? body : trimmedBody}</TextContainer>
      <PostDetails>
        <Name>by {username}</Name>
        <VerticalDivider>∙</VerticalDivider>
        <TimePosted>{timePosted}</TimePosted>
      </PostDetails>
    </Container>
  );
};
