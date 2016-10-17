import alt from '../alt';

import UserActions from '../actions/UserActions';

class UserStore {

    constructor() {
        this.bindActions(UserActions);
        
        this.state = {
            isLoggedIn: false,
            userName: null,
            password: null
        };
    }

    checkCookie() {
        const name = loggedIn + "=";
        const cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++) {
            var currentCookie = cookies[i];
            while (currentCookie.charAt(0)==' ') {
                currentCookie = currentCookie.substring(1);
            }

            if (currentCookie.indexOf(name) == 0) {
                this.setState({ 
                    isLoggedIn: true, 
                    userName: c.substring(name.length, currentCookie.length)
                });
            }
        }
    }

    onLogIn(user) {
        const currentDate = new Date();
        currentDate.setTime(currentDate.getTime() + (1*24*60*60*1000));
        const expirationTime = currentDate.toUTCString();
        document.cookie = `loggedIn=${user.userName}; expires=${expirationTime}; path=/`;
        this.setState({ isLoggedIn: true });
    }

    onUpdateUserName(userName) {
        this.setState({ userName: userName });
    }

    onUpdatePassword(password) {
        this.setState({ password: password });
    }

    onResetUser() {
        this.setState({ userName: null, password: null });
    }

    static isLoggedIn() {
        const { isLoggedIn } = this.getState();
        return isLoggedIn;
    }
}

export default alt.createStore(UserStore, 'UserStore');