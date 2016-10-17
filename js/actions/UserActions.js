import alt from '../alt';

class UserActions {
	logIn(userName, password) {
    	return { userName, password };
    }

    updateUserName(userName) {
    	return userName;
    }

    updatePassword(password) {
    	return password;
    }

    resetUser() {
    	return true;
    }
}

export default alt.createActions(UserActions);