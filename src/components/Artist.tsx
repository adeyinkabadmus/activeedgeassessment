// components/ArtistList.js
import React from 'react';
import { ArtistProp } from '../types/artist.type';

const Artist: React.FC<ArtistProp> = ({ artist }) => {
  return (
    <div>
      <div>{artist.name}</div>
      <div><a target='_blank' href={artist.website}>Visit website</a></div>
    </div>
  );
};

export default Artist;