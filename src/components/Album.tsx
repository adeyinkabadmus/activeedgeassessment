import React from "react";
import { AlbumProp } from "../types/album.type";
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Album: React.FC<AlbumProp> = ({ album, classes }) => {
	return (
		<Card className={`${classes}`}>
			<div className="flow-root">
				<ul className="divide-y divide-gray-200 dark:divide-gray-700">
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0"></div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Title
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{album.title}
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{album.title}
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <Button size="xs"><Link to={`albums/${album.id}/photos`}>See photos</Link></Button>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</Card>
	);
};

export default Album;
