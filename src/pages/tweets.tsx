import React, { useLayoutEffect, useState } from "react";
import Tweet from "../components/Tweet";
import {
	createOne,
	deleteOne,
	getAll,
	updateOne,
} from "../services/tweet.service";
import { TweetEntity, Tweet as TweetType, TweetUploadEntity } from "../types/tweet.type";
import { Button } from "flowbite-react";
import Popup from "../components/Popup";
import TweetUploadForm from "../components/TweetUpload";

const Tweets: React.FC = () => {
	const [tweets, setTweets] = useState<Array<TweetType>>([]);
	const [error, setErrorState] = useState<string | null>(null);
  const [tweetEntity, setTweetEntity] = useState<TweetUploadEntity | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
    //console.log("INDEX" , index, id)
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

  const showTweetForm = async (tweet: TweetUploadEntity) => {
    //console.log("TWEET ", tweet)
    setTweetEntity(tweet);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTweetEntity(null);
  }

	return (
		<div id="Tweets">
			<h2 className="mt-10 mb-10 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
				Tweets
			</h2>
      <div className="grid justify-items-end mb-3">
        <Button size="md" onClick={() => showTweetForm({action: "New", tweet:{ name: '', email: '', body: ''}})}>New tweet</Button>
      </div>
			{error !== null ? <div>{error}</div> : ""}
			<div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4">
				{tweets.map((tweet, index) => (
					<div key={index}>
						<Tweet
							tweet={tweet}
              index={index}
              id={tweet.it}
							classes="mb-5"
							edit={() => showTweetForm({ action: "Edit", tweet: tweet })}
              remove={remove}
						/>
					</div>
				))}
        {isOpen && (
         <Popup state={isOpen} onClose={closeModal} title={`${tweetEntity?.action} tweet`} content={<TweetUploadForm classes="" tweet={tweetEntity?.tweet} />} />
      )}
			</div>
		</div>
	);
};

export default Tweets;
