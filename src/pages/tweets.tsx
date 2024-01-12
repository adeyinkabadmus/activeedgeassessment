import React, { useLayoutEffect, useState } from "react";
import Tweet from "../components/Tweet";
import { getAll } from "../services/tweet.service";
import { Tweet as TweetType } from "../types/tweet.type";

const Tweets: React.FC = () => {

  const [tweets, setTweets] = useState<Array<TweetType>>([]);
  const [error, setErrorState] = useState<string | null>(null);

  useLayoutEffect(() => {
    getAll().then(response => {
      console.log("RESPONSE DATA ", response.data)
      setTweets(response.data);
    }).catch(error => {
      //console.log(error)
      setErrorState(error?.response?.data?.message);
    })
  }, []);

  return (
    <div id="Tweets">
      <h2 className="mt-10 mb-10 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tweets</h2>
      { error !== null ? <div>{error}</div> : "" }
      <div className="grid grid-cols-2 gap-4">
        {tweets.map((tweet) => (
        <div key={tweet.it}><Tweet tweet={tweet} classes="mb-5" /> </div>
        ))}
      </div>
    </div>
  );
};

export default Tweets;
