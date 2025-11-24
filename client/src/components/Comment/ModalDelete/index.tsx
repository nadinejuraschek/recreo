import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Modal } from 'components';
import toast from 'react-hot-toast';
import { deleteReview as deleteReviewFn } from 'api';
import { ModalDescription } from './styles';
import { ModalDeleteProps } from './types';

export const ModalDelete = ({ playgroundId, reviewId, toggleModal }: ModalDeleteProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteReview, isPending } = useMutation({
    mutationFn: async () => {
      await deleteReviewFn({ playgroundId, reviewId });
    },
    onError: (err: any) => {
      toast.error(err?.message ?? 'Something went wrong. Please try again later.');
      throw err;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['playground', playgroundId] });
      queryClient.invalidateQueries({ queryKey: ['playgrounds'] });
      toast.success('The comment has been deleted successfully.');
    },
  });

  return (
    <Modal
      closeButton
      footer={
        <Button disabled={isPending} loading={isPending} onClick={() => deleteReview()}>
          Delete
        </Button>
      }
      title="Delete Comment"
      toggleModal={toggleModal}
    >
      <ModalDescription>Are you sure that you would like to delete this comment? This action can not be undone.</ModalDescription>
    </Modal>
  );
};
