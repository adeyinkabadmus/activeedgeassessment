import React, { useLayoutEffect, useState } from "react";
import { Photo as PhotoType } from "../types/photo.type";
import Tweet from "../components/Tweet";
import { getAll } from "../services/tweet.service";

const Comments: React.FC = () => {

  const [tweets, setTweets] = useState<Array<PhotoType>>([]);
  const [error, setErrorState] = useState<string | null>(null);

  useLayoutEffect(() => {
    getAll().then(response => {
      setTweets(response.data);
    }).catch(error => {
      //console.log(error)
      setErrorState(error?.response?.data?.message);
    })
  }, []);

  return (
    <div id="Comments">
      <h2 className="mt-10 mb-10 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Album photos</h2>
      { error !== null ? <div>{error}</div> : "" }
      <div className="grid grid-cols-5 gap-4">
        {tweets.map((comment) => (
        <div key={comment.id}><Tweet tweet={comment} classes="" /> </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
