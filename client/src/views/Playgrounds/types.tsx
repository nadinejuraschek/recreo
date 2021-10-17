// TYPES
import { Playground } from 'types';

export interface ErrorStateProps {
  setOpenAddPlaygroundModal: (state: boolean) => void;
  setShowAllPlaygrounds: (state: boolean) => void;
}

export interface PlaygroundsListProps {
  playgrounds: Playground[];
}
