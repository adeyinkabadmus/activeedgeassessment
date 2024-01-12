export type Tweet = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};

export type TweetProp = {
  classes: string;
  tweet: Tweet;
	index: number;
	id: number;
	edit: (data: TweetUploadEntity) => Promise<void>;
	remove: (data: TweetUploadEntity) => Promise<void>;
};

export type TweetEntity = Omit<Tweet, "postId" | "it">;

export type TweetUploadEntity = {
	tweet: TweetEntity;
	action: string;
	index?: number;
	id?: number;
};

export type TweetUploadProp = {
	tweet?: TweetEntity;
	classes: string;
};
