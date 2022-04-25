import React from 'react';
import Tweet from './Tweet';

const TweetList = ({name, tweets, setTweets, like, setLike}) => {
    return (
        <div className='tweet-list'>
            {tweets.map(tweet =>
                <Tweet
                    name={name}
                    tweet={tweet}
                    tweets={tweets}
                    setTweets={setTweets}
                    like={like}
                    setLike={setLike}
                    key= {tweet.id}
                />
            )}
        </div>
    );
}

export default TweetList;