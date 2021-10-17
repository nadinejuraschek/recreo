// STYLED COMPONENTS
import { Avatar, Container, Name, Text, TimePosted } from './styles/Comment';

// INTERFACES
import { CommentProps } from './types';

const Comment = ({ body = '', username = '' }: CommentProps): JSX.Element => {
  // TODO: add time posted
  // TODO: add avatar

  return (
    <Container>
      <Avatar>
        <img
          src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          alt={username}
        />
      </Avatar>
      <div>
        <Name>{username}</Name>
        <TimePosted>a few minutes ago</TimePosted>
        <Text>{body}</Text>
      </div>
    </Container>
  );
};

export default Comment;
