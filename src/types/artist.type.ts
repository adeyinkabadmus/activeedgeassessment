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
};
