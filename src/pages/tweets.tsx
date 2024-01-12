import React, { useLayoutEffect, useState } from "react";
import Tweet from "../components/Tweet";
import {
	createOne,
	deleteOne,
	getAll,
	updateOne,
} from "../services/tweet.service";
import { TweetEntity, Tweet as TweetType } from "../types/tweet.type";

const Tweets: React.FC = () => {
	const [tweets, setTweets] = useState<Array<TweetType>>([]);
	const [error, setErrorState] = useState<string | null>(null);

	useLayoutEffect(() => {
		getAll()
			.then((response) => {
				//console.log("RESPONSE DATA ", response.data);
				setTweets(response.data);
			})
			.catch((error) => {
				//console.log(error)
				setErrorState(error?.response?.data?.message);
			});
	}, []);

	const edit = async (index: number, id: number, payload: TweetEntity) => {
    //alert("HERE")
		updateOne(id, payload)
			.then((response) => {
				//set state for the edited tweet
        const twts = tweets;
        twts[index] = response.data;
        setTweets(twts);
			})
			.catch((error) => {
				setErrorState(error?.response?.data?.message);
			});
	};

	const remove = async (index: number, id: number) => {
    console.log("INDEX" , index, id)
		deleteOne(id)
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			.then((response) => {
				//remove from list
        console.log(response.data)
        const twts = tweets.splice(index, 1);
        setTweets(twts);
			})
			.catch((error) => {
				setErrorState(error?.response?.data?.message);
			});
	};

	const create = async (body: TweetEntity) => {
		createOne(body)
			.then((response) => {
				//push to list
        const twts = tweets;
        twts.push(response.data);
        setTweets(twts);
			})
			.catch((error) => {
				setErrorState(error?.response?.data?.message);
			});
	};

	return (
		<div id="Tweets">
			<h2 className="mt-10 mb-10 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
				Tweets
			</h2>
			{error !== null ? <div>{error}</div> : ""}
			<div className="grid grid-cols-2 gap-4">
				{tweets.map((tweet, index) => (
					<div key={index}>
						<Tweet
							tweet={tweet}
              index={index}
              id={tweet.it}
							classes="mb-5"
							edit={() => edit(index, tweet.it, tweet)}
              remove={remove}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tweets;
