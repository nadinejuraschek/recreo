export interface ModalProps {
  children: React.ReactNode;
  closeButton?: boolean;
  footer?: React.ReactNode;
  title?: string;
  toggleModal: (open: boolean) => void;
}

export interface ModalHeaderProps {
  close?: boolean;
  handleClose: (open: boolean) => void;
  title?: string;
}
