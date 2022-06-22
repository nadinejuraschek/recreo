import { Review } from 'types';

export interface CommentsProps {
  playgroundId: string;
  rating?: number;
  reviews: Review[];
}
