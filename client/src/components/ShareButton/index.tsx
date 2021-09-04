// DEPENDENCIES
import { useState } from 'react';

// COMPONENTS
import Modal from 'components/Modal';
import ShareModal from './components/ShareModal';

// STYLED COMPONENTS
import { Icon } from './styles/ShareButton';

const ShareButton = (): JSX.Element => {
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

export default ShareButton;
