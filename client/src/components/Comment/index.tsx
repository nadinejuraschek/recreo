// STYLED COMPONENTS
import { Avatar, Container, Name, Text, TimePosted } from './styles/Comment';

const Comment = () => {
  return (
    <Container>
      <Avatar>
        <img
          src="https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          alt=""
        />
      </Avatar>
      <div>
        <Name>Firstname Lastname</Name>
        <TimePosted>a few minutes ago</TimePosted>
        <Text>
          Blandit turpis cursus in hac habitasse platea. Id donec ultrices tincidunt arcu non sodales neque sodales. Viverra mauris in
          aliquam sem fringilla ut morbi tincidunt augue. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Erat
          imperdiet sed euismod nisi porta lorem. Risus at ultrices mi tempus imperdiet. Ultricies tristique nulla aliquet enim tortor at
          auctor urna nunc. Id ornare arcu odio ut sem nulla pharetra. Cras pulvinar mattis nunc sed blandit libero.
        </Text>
      </div>
    </Container>
  );
};

export default Comment;
