import { Album } from "./album.type";
import { Address } from "./location.type"

export type Artist = {
  id: number;
  name: string;
  username: string;
  email: string,
  address: Address,
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
};

export type ArtistProp = {
  artist: Artist;
  classes: string;
  viewAlbums: (id: number) => Promise<void>;
};

export type AlbumProp = {
  artist: Artist;
  albums: Array<Album>;
  classes: string;
};