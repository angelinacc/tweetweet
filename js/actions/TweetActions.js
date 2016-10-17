import alt from '../alt';

class TweetActions {
	getAll(userID) {
        const response = [
            { message: 'Good morning' },
            { message: 'How Are You' },
            { message: 'Good night!!' }
        ];
    	return response;
    }
}

export default alt.createActions(TweetActions);