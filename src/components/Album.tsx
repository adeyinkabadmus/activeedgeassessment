import React from "react";
//import { AlbumProp } from "../types/album.type";

const Album: React.FC<AlbumProp> = ({ album, classes }) => {
	return (
		<div
			className={`${classes} w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
		>
			<div className="flex flex-col items-center pb-10">
				{/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="" alt=""/> */}
				<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					{album.title}
				</h5>
				<div className="flex mt-4 md:mt-6">
					
				</div>
			</div>
		</div>
	);
};

export default Album;
