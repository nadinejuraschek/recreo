import { useState } from 'react';
import { Modal } from '../Modal';
import { ShareModal } from './components/ShareModal';
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
