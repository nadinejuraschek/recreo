// TYPES
import { Playground } from 'types';

export interface PlaygroundsListProps {
  playgrounds: Playground[];
  setOpenAddPlaygroundModal: (state: boolean) => void;
}
