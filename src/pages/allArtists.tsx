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
      <h2 className="mt-10 mb-10 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Chocolate city artists</h2>
      { error !== null ? <div>{error}</div> : "" }
      <div className="grid grid-cols-4 gap-4">
        {artists.map((artist) => (
        <div key={artist.id}><Artist artist={artist} classes="" /> </div>
        //  onArtistClick={() => renderArtist(artist)}
        ))}
      </div>
      
    </div>
  );
};

export default ArtistList;
