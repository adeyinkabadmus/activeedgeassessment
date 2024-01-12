import React from "react";
import { Button, Card } from "flowbite-react";
import { TweetProp } from "../types/tweet.type";

const Tweet: React.FC<TweetProp> = ({ tweet, classes }) => {
	return (
		<Card className={`${classes}`}>
			<div className="flow-root">
				<ul className="divide-y divide-gray-200 dark:divide-gray-700">
					<li className="py-3 sm:py-4">
						<div className="items-center space-x-4">
							<div className="shrink-0"></div>
							<div className="min-w-0 pb-5">
								<p className="text-sm font-extrabold text-black-800 dark:text-dark-400">
									{tweet.name}
								</p>
							</div>
							<div className="min-w-0">
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{tweet.body}
								</p>
							</div>
							<div className="mt-4 flex space-x-3 lg:mt-6">
								<Button size="xs">Edit</Button>
								<Button size="xs" color="failure">Delete</Button>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</Card>
	);
};

export default Tweet;
