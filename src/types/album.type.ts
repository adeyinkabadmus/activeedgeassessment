export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type AlbumProp = {
  album: Album;
  classes: string;
};