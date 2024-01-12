import React from "react";
import { Card } from 'flowbite-react';
import { TweetProp } from "../types/tweet.type";

const Tweet: React.FC<TweetProp> = ({ tweet, classes }) => {
	return (
    <Card className={`${classes}`}>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img src={photo.thumbnailUrl} height={100} width={100} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Title</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{photo.title}</p>
              </div>
              {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"><Link to={`/albums/${album.id}/photos`}><Button href={`/albums/${album.id}/photos`} size="xs">See photos {`/albums/${album.id}/photos`}</Button></Link></div> */}
            </div>
          </li>
        </ul>
      </div>
    </Card>
	);
};

export default Tweet;
