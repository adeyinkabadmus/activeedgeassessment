import React, { useLayoutEffect, useState } from "react";
import { Artist as ArtistType, AlbumProp } from "../types/artist.type";
import Artist from "../components/Artist";
import { getAlbums, getAll } from "../services/artist.service";
import Popup from "../components/Popup";
import Album from "../components/Album";

const ArtistList: React.FC = () => {

  const [artists, setArtists] = useState<Array<ArtistType>>([]);
  const [error, setErrorState] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [artistData, setArtistData] = useState<AlbumProp | null>(null);

  useLayoutEffect(() => {
    getAll().then(response => {
      setArtists(response.data);
    }).catch(error => {
      //console.log(error)
      setErrorState(error?.response?.data?.message);
    })
  }, []);

  const fetchAlbums = async (artist: ArtistType) => {
    getAlbums(artist.id).then(response => {
      setArtistData({
        artist, 
        albums: response.data,
        classes: "" 
      });
      setIsOpen(true);
    }).catch(error => {
      console.log("Error getting albums for artist", error);
    })
  }

  const closeModal = () => {
    setIsOpen(false);
    setArtistData(null);
  }

  return (
    <div id="Artists">
      <h2 className="mt-10 mb-10 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Chocolate city artists</h2>
      { error !== null ? <div>{error}</div> : "" }
      <div className="grid grid-cols-4 gap-4">
        {artists.map((artist) => (
        <div key={artist.id}><Artist artist={artist} classes="" viewAlbums={() => fetchAlbums(artist)} /> </div>
        ))}
        {isOpen && (
         <Popup state={isOpen} onClose={closeModal} title={`${artistData?.artist?.name}'s ablums`} content={artistData?.albums.map(album => <Album key={album.id} album={album} classes="" /> ) } />
      )}
      </div>
      
    </div>
  );
};

export default ArtistList;
