// TYPES
import { Playground } from 'types';

export interface AddPlaygroundFormProps {
  setOpenAddPlaygroundModal: (open: boolean) => void;
}

export interface ErrorStateProps {
  setOpenAddPlaygroundModal: (state: boolean) => void;
  setShowAllPlaygrounds?: (state: boolean) => void;
}

export interface PlaygroundsListProps {
  playgrounds: Playground[];
  setOpenAddPlaygroundModal: (state: boolean) => void;
}

export type AddPlaygroundInputs = {
  description: string;
  location: string;
  // lat: number;
  // long: number;
  name: string;
};

export type AddPlaygroundData = {
  description: string;
  location: string;
  // lat: number;
  // long: number;
  name: string;
};
