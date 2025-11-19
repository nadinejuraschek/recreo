export interface AddPlaygroundFormProps {
  setOpenAddPlaygroundModal: (open: boolean) => void;
}

export type AddPlaygroundInputs = {
  description: string;
  images: string;
  location: string;
  // lat: number;
  // long: number;
  name: string;
};
