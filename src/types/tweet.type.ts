export type Tweet = {
	postId: number;
	it: number;
	name: string;
	email: string;
	body: string;
};

export type TweetProp = {
  classes: string;
  tweet: Tweet
};