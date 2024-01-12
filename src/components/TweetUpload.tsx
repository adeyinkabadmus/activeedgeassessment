import React from "react";
import { TweetUploadProp } from "../types/tweet.type";
import { Label, TextInput } from "flowbite-react";

const TweetUploadForm: React.FC<TweetUploadProp> = ({ tweet, classes }) => {
	return (
		<div className={`${classes} flex flex-col gap-4`}>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="small" value="Email" />
				</div>
				<TextInput id="small" type="text" sizing="sm" value={tweet?.email} />
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="base" value="Name" />
				</div>
				<TextInput id="base" type="text" sizing="md" value={tweet?.name} />
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="large" value="Tweet" />
				</div>
				<TextInput id="large" type="text" sizing="lg" value={tweet?.body} />
			</div>
		</div>
	);
};

export default TweetUploadForm;
