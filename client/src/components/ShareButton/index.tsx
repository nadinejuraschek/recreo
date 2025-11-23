import { useState } from 'react';
import { Modal } from '../Modal';
import { ShareModal } from './components/ShareModal';
import { Icon } from './styles';
import { Button } from 'components';

export const ShareButton = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Button icon onClick={() => setOpenModal(!openModal)} variant="tertiary">
        <Icon />
      </Button>
      {openModal && (
        <Modal closeButton title="Share Playground" toggleModal={setOpenModal}>
          <ShareModal />
        </Modal>
      )}
    </>
  );
};
