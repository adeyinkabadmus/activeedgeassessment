import React, { useLayoutEffect, useState } from "react";
import { Artist as ArtistType } from "../types/artist.type";
import Artist from "../components/Artist";

const ArtistList: React.FC = () => {

  const [artists, setArtists] = useState<Array<ArtistType>>([]);

  useLayoutEffect(() => {
    
  }, []);

  const renderArtist = (artist: ArtistType) => {
    console.log(artist);
  };

  return (
    <div id="Artists">
      <div>Artists</div>
      {artists.map((artist) => (
        <Artist key={artist.id} artist={artist} onArtistClick={() => renderArtist(artist)} />
        ))}
    </div>
  );
};

export default ArtistList;
