// components/ArtistList.js
import React from 'react';
import { ArtistProp } from '../types/artist.type';
import { prefixProtocol } from '../utils/url.util';

const Artist: React.FC<ArtistProp> = ({ artist }) => {
  return (
    <div>
      <div>{artist.name}</div>
      <div><a target='_blank' href={prefixProtocol(artist.website)} rel="noopener noreferrer">Visit website</a></div>
    </div>
  );
};

export default Artist;