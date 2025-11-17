import axios from 'axios';
import { Playground } from 'types';

export async function getPlaygrounds() {
  return await axios.get<Playground[]>('/api/playgrounds').then((res) => res.data.sort((a, b) => a.title.localeCompare(b.title)));
}

export async function getSinglePlayground(id: string) {
  return await axios.get(`/api/playgrounds/${id}`).then((res) => res.data);
}

// TODO: fix type
export async function createPlayground(newPlayground: any) {
  return await axios.post('/api/playgrounds', newPlayground);
}

/* export async function editPlayground() {
  console.log('LOG put');
} */

/* export async function deletePlayground(userId: string, id: string) {
  return await axios.delete(`/api/playgrounds/${id}`, { user: { _id: userId } });
} */

export async function createReview({
  author,
  body,
  rating,
  playgroundId,
}: {
  author: string | undefined;
  body: string;
  rating: number;
  playgroundId: string;
}) {
  return await axios.post(`/api/playgrounds/${playgroundId}/review`, {
    author,
    body,
    rating,
  });
}
