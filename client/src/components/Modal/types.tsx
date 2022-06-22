export interface ModalProps {
  children: React.ReactNode;
  closeButton?: boolean;
  footer?: React.ReactNode;
  title?: string | undefined;
  toggleModal: (open: boolean) => void;
}
