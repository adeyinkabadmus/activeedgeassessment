export type Tweet = {
	postId: number;
	it: number;
	name: string;
	email: string;
	body: string;
};

export type TweetProp = {
  classes: string;
  tweet: Tweet;
	index: number;
	id: number;
	edit: (index: number, id: number, tweet: TweetEntity) => Promise<void>;
	remove: (index: number, id: number) => Promise<void>;
};

export type TweetEntity = Omit<Tweet, "postId" | "it">;
