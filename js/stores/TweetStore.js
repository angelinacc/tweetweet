import alt from '../alt';

import TweetActions from '../actions/TweetActions';

class TweetStore {

    constructor() {
        this.bindActions(TweetActions);

        this.state = { tweets: [] };
    }

    onGetAll(tweets) {
    	const fetchedTweets = [];
    	for (let i = tweets.length-1; i >= 0; i--) {
    		fetchedTweets.push(tweets[i].message);
    	}
    	this.setState({tweets: fetchedTweets});
    }

    static getTweets() {
        const { tweets } = this.getState();
        return tweets;
    }
}

export default alt.createStore(TweetStore, 'TweetStore');