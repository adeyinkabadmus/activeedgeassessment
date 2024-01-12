import React, { useLayoutEffect, useState } from "react";
import { Artist as ArtistType } from "../types/artist.type";
import Artist from "../components/Artist";
import { getAll } from "../services/artist.service";

const ArtistList: React.FC = () => {

  const [artists, setArtists] = useState<Array<ArtistType>>([]);
  const [error, setErrorState] = useState<string | null>(null);

  useLayoutEffect(() => {
    getAll().then(response => {
      setArtists(response.data);
    }).catch(error => {
      setErrorState(error.response.msg);
    })
  }, []);

  // const renderArtist = (artist: ArtistType) => {
  //   console.log(artist);
  // };

  return (
    <div id="Artists">
      <div>Artists</div>
      { error !== null ? <div>{error}</div> : "" }
      {artists.map((artist) => (
        <div><Artist key={artist.id} artist={artist} /> </div>
        //  onArtistClick={() => renderArtist(artist)}
        ))}
    </div>
  );
};

export default ArtistList;
