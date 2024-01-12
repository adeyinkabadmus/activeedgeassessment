import React, { useLayoutEffect, useState } from "react";
import { Photo as PhotoType } from "../types/photo.type";
import { getByAlbum } from "../services/photo.service";
import { useParams } from "react-router";
import Photo from "../components/Photo";

const ArtistList: React.FC = () => {

  const [photos, setPhotos] = useState<Array<PhotoType>>([]);
  const [error, setErrorState] = useState<string | null>(null);

  const { albumId } = useParams();

  useLayoutEffect(() => {
    getByAlbum(Number(albumId)).then(response => {
      setPhotos(response.data);
    }).catch(error => {
      //console.log(error)
      setErrorState(error?.response?.data?.message);
    })
  }, [albumId]);

  return (
    <div id="Photos">
      <h2 className="mt-10 mb-10 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Album photos</h2>
      { error !== null ? <div>{error}</div> : "" }
      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
        <div key={photo.id}><Photo photo={photo} classes="" /> </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
