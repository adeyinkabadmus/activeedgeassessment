import React, { useState } from "react";
import { ArtistProp } from "../types/artist.type";
import Popup from "./Popup";
import { getAlbums } from "../services/artist.service";
import Album from "./Album";
import { Album as AlbumType } from "../types/album.type";

const Artist: React.FC<ArtistProp> = ({ artist, classes, viewAlbums }) => {
	// const [isOpen, setIsOpen] = useState(false);
  // const [albums, setAlbums] = useState<Array<AlbumType>>([]);

  // const fetchAlbums = async (artistId: number) => {
  //   getAlbums(artistId).then(response => {
  //     setAlbums(response.data);
  //     setIsOpen(true);
  //   }).catch(error => {
  //     console.log("Error getting albums for artist", error);
  //   })
  // }

	return (
		<>
			<div
				className={`${classes} w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
			>
				<div className="flex flex-col items-center pb-10">
					{/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="" alt=""/> */}
					<h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
						{artist.name}
					</h3>
					<span className="text-sm text-gray-500 dark:text-gray-400">
						{artist.company.name}
					</span>
					<div className="flex mt-4 md:mt-6">
						<button
							onClick={() => viewAlbums(artist.id)}
							className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							View artists
						</button>
						{/* <a
						href={`mailto:${artist.email}`}
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Email
					</a>
					<a
						href={`tel:${artist.phone}`}
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
					>
						Call us
					</a>
					<a
						href={prefixProtocol(artist.website)}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
					>
						Website
					</a> */}
					</div>
				</div>
			</div>
      {/* {isOpen && (
        <Popup content={albums.map(album => <Album album={album} classes="" title={artist.name}} />
      )} */}
		</>
	);
};

export default Artist;
