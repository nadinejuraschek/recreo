import { Icon } from './styles';
import { UserContext } from 'context';
import { useContext, useState } from 'react';
import { ButtonEditProps } from './types';
import { ModalEdit } from './ModalEdit';
import { Button } from 'components';

export const ButtonEdit = ({ authorId, id, playground }: ButtonEditProps) => {
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
      {openModal && <ModalEdit id={id} playground={playground} toggleModal={setOpenModal} />}
    </>
  );
};
