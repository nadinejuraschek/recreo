import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Modal } from 'components';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { deletePlayground as deletePlaygroundFn } from 'api';
import { ModalDescription } from './styles';

export const ModalDelete = ({ id, toggleModal }: { id: string; toggleModal: (open: boolean) => void }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deletePlayground, isPending } = useMutation({
    mutationFn: async (id: string) => {
      await deletePlaygroundFn(id);
    },
    onError: (err: any) => {
      toast.error(err?.message ?? 'Something went wrong. Please try again later.');
      throw err;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['playground', id] });
      queryClient.invalidateQueries({ queryKey: ['playgrounds'] });
      toast.success('The playground has been deleted successfully.');
      navigate('/playgrounds');
    },
  });

  return (
    <Modal
      closeButton
      footer={
        <Button disabled={isPending} loading={isPending} onClick={() => deletePlayground(id)}>
          Delete
        </Button>
      }
      title="Delete Playground"
      toggleModal={toggleModal}
    >
      <ModalDescription>Are you sure that you would like to delete this playground? This action can not be undone.</ModalDescription>
    </Modal>
  );
};
