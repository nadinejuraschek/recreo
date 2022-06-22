// DEPENDENCIES
import { useState } from 'react';

// COMPONENTS
import { Modal } from '../Modal';
import { ShareModal } from './components/ShareModal';

// STYLED COMPONENTS
import { Icon } from './styles';

export const ShareButton = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Icon onClick={() => setOpenModal(!openModal)} />
      {openModal && (
        <Modal closeButton title="Share Playground" toggleModal={setOpenModal}>
          <ShareModal />
        </Modal>
      )}
    </>
  );
};
