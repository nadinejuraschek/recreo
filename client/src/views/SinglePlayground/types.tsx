export interface HeaderProps {
  name?: string;
}

export interface InfoProps {
  description?: string;
  location?: string;
  rating?: number;
}

export interface PreviewProps {
  images?: any[];
  name?: string;
}

export interface CommentsProps {
  reviews?: Review[];
}

export type Review = {
  author: Author;
  body: string;
  rating: number;
  _id: string;
  __v: number;
};

export type Author = {
  email: string;
  username: string;
  _id: string;
  __v: number;
};
