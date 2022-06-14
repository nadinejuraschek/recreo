// DEPENDENCIES
import { formatDistance } from 'date-fns';

// COMPONENTS
import { Rating } from 'components';

// STYLED COMPONENTS
import { Avatar, Container, Header, Name, PostDetails, Text, TimePosted, VerticalDivider } from './styles/Comment';

// INTERFACES
import { CommentProps } from './types';

export const Comment = ({ body = '', postedOn, rating = 0, username = '' }: CommentProps): JSX.Element => {
  // TODO: add time posted
  // TODO: add avatar

  const timePosted = formatDistance(new Date(postedOn), new Date(), { addSuffix: true });

  return (
    <Container>
      <Header>
        <Avatar>
          <img
            src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            alt={username}
          />
        </Avatar>
        <Rating rating={rating} />
      </Header>
      <Text>{body}</Text>
      <PostDetails>
        <Name>by {username}</Name>
        <VerticalDivider>∙</VerticalDivider>
        <TimePosted>{timePosted}</TimePosted>
      </PostDetails>
    </Container>
  );
};
