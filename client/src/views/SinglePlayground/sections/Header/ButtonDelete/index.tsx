import { Icon } from './styles';
import { UserContext } from 'context';
import { useContext, useState } from 'react';
import { ButtonDeleteProps } from './types';
import { ModalDelete } from './ModalDelete';
import { Button } from 'components';

export const ButtonDelete = ({ authorId, id }: ButtonDeleteProps) => {
  const { user } = useContext(UserContext);

  const [openModal, setOpenModal] = useState(false);

  if (authorId !== user?.id) {
    return null;
  }

  return (
    <>
      <Button icon onClick={() => setOpenModal(true)} variant="tertiary">
        <Icon />
      </Button>
      {openModal && <ModalDelete id={id} toggleModal={setOpenModal} />}
    </>
  );
};
