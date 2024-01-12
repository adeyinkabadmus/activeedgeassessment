import React from "react";
import { TweetUploadProp } from "../types/tweet.type";
import { Label, TextInput, Textarea } from "flowbite-react";

const TweetUploadForm: React.FC<TweetUploadProp> = ({ tweet, classes }) => {
	return (
		<div className={`${classes} flex flex-col gap-4`}>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="email" value="Email" />
				</div>
				<TextInput id="email" type="text" sizing="sm" value={tweet?.email} />
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="name" value="Name" />
				</div>
				<TextInput id="name" type="text" sizing="md" value={tweet?.name} />
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="tweet" value="Tweet" />
				</div>
        <Textarea id="tweet" placeholder="Leave a tweet..." required rows={4} value={tweet?.body} />
			</div>
		</div>
	);
};

export default TweetUploadForm;
