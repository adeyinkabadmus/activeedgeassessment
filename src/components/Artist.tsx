import React from "react";
import { ArtistProp } from "../types/artist.type";
import { Card, Button } from "flowbite-react";

const Artist: React.FC<ArtistProp> = ({ artist, classes, viewAlbums }) => {
	return (
		<>
			<Card className={`${classes} max-w-sm`}>
				<div className="flex flex-col items-center pb-10">
					<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
						{artist.name}
					</h5>
					<span className="text-sm text-gray-500 dark:text-gray-400">
						{artist.company.name}
					</span>
					<div className="mt-4 flex space-x-3 lg:mt-6">
						<Button onClick={() => viewAlbums(artist.id)} size="xs">
							View artists
						</Button>
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
  </a>*/}
					</div>
				</div>
			</Card>
		</>
	);
};

export default Artist;
