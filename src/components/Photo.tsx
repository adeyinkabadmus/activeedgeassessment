import React from "react";
import { Card } from 'flowbite-react';
import { PhotoProp } from "../types/photo.type";

const Photo: React.FC<PhotoProp> = ({ photo, classes }) => {
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
                <p className="text-sm font-medium text-gray-900 dark:text-white">Title</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{photo.title}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
	);
};

export default Photo;
