import axios from 'axios';
import { Playground } from 'types';

export async function getPlaygrounds() {
  return await axios
    .get<Playground[]>(`${process.env.REACT_APP_API}api/playgrounds`, { withCredentials: true })
    .then((res) => res.data.sort((a, b) => a.title.localeCompare(b.title)));
}

export async function getSinglePlayground(id: string) {
  return await axios.get(`${process.env.REACT_APP_API}api/playgrounds/${id}`, { withCredentials: true }).then((res) => res.data);
}

// TODO: fix type
export async function createPlayground(newPlayground: any) {
  return await axios.post(`${process.env.REACT_APP_API}api/playgrounds`, newPlayground, { withCredentials: true });
}

/* export async function editPlayground() {
  console.log('LOG put');
} */

export async function deletePlayground(id: string) {
  return await axios.delete<{ message?: string }>(`${process.env.REACT_APP_API}api/playgrounds/${id}`, { withCredentials: true });
}

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
  return await axios.post(
    `${process.env.REACT_APP_API}api/playgrounds/${playgroundId}/review`,
    {
      author,
      body,
      rating,
    },
    { withCredentials: true }
  );
}
