export interface ModalHeaderProps {
  close: boolean;
  handleClose: (open: boolean) => void;
  title?: string | undefined;
}
