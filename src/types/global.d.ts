type Author = {
  name: string;
  image: string;
};

type PaintingType = {
  title: string;
  description: string;
  date: string;
  image: string;
  artist: AuthorType;
};
