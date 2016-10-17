import connectToStores from 'alt/utils/connectToStores';
import React from 'react';
import TweetActions from '../actions/TweetActions';
import UserStore from '../stores/UserStore';
import TweetStore from '../stores/TweetStore';
import { hashHistory } from 'react-router';

/* Components */
import LoginPage from './Login.jsx';

class Main extends React.Component {
  static getStores() {
    return [UserStore, TweetStore];
  }

  static getPropsFromStores() {
    return { isLoggedIn: UserStore.isLoggedIn(), tweets: TweetStore.getTweets() };
  }

  componentWillMount() {
    if (!this.props.isLoggedIn) {
        // @TODO - need to check cookie for user
        hashHistory.push('/login');
    } else {
        TweetActions.getAll(this.props.userName);
    }
  }

  render() {
    const { tweets } = this.props;
    const userTweets = tweets.map(tweet => { return <div>{ tweet }</div>; });

    return (
      <div>
        <h2>Welcome!</h2>
        { userTweets }
      </div>
    );
  }
}
export default connectToStores(Main);