import { useContext, useState } from 'react';
import { formatDistance } from 'date-fns';
import { Button, Rating } from 'components';
import { Container, DeleteIcon, Footer, Header, Name, PostDetails, ReadMore, TextContainer, TimePosted, VerticalDivider } from './styles';
import { trimBodyAtWordEnd } from 'utils';
import { CommentProps } from './types';
import { UserContext } from 'context';
import { ModalDelete } from './ModalDelete';

export const Comment = ({ playgroundId, review }: CommentProps) => {
  const { user } = useContext(UserContext);

  if (!review) {
    return null;
  }

  const { author, body, _id, postedOn, rating } = review;

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
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

  const isAuthor = author?._id === user?.id;

  return (
    <>
      <Container className="comments-item">
        <Header className="comments-header">
          <Rating rating={rating} />
        </Header>
        <TextContainer className="comments-text">{showFullComment || body.length <= 120 ? body : trimmedBody}</TextContainer>
        <Footer className="comments-post-details">
          <PostDetails>
            <Name className="comments-name">by {author?.username ?? ''}</Name>
            <VerticalDivider className="comments-vertical-divider">∙</VerticalDivider>
            <TimePosted className="comments-time-posted">{timePosted}</TimePosted>
          </PostDetails>
          {isAuthor && (
            <Button icon onClick={() => setOpenDeleteModal(true)} variant="tertiary">
              <DeleteIcon />
            </Button>
          )}
        </Footer>
      </Container>
      {openDeleteModal && (
        <ModalDelete playgroundId={playgroundId} reviewId={_id} toggleModal={() => setOpenDeleteModal(!!openDeleteModal)} />
      )}
    </>
  );
};
