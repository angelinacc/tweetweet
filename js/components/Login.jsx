import connectToStores from 'alt/utils/connectToStores';
import React from 'react';
import { Input, Button } from 'react-bootstrap';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import { hashHistory } from 'react-router';

class Login extends React.Component {
  static getStores() {
    return [UserStore];
  }

  static getPropsFromStores() {
    return UserStore.getState();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
        hashHistory.push('/');
    }
  }

  updateUserName(e) {
    UserActions.updateUserName(e.target.value);
  }

  updatePassword(e) {
    UserActions.updatePassword(e.target.value);
  }

  loginUser() {
    UserActions.logIn(this.props.userName, this.props.password);
  }

  render() {
    if (this.props.isLoggedIn) { return null; }
    const disabledLogin = !this.props.userName || !this.props.password;
    return (
      <div>
        <h2>Please Log in:</h2>
        <Input label="Email:" type="email" value={this.props.userName}
          onChange={ this.updateUserName.bind(this) } />
        <Input label="Password:" type="password" value={this.props.password}
          onChange={ this.updatePassword.bind(this) } />
        <Button bsStyle="primary" onClick={ this.loginUser.bind(this) } disabled={disabledLogin}>Log In</Button>
        <Button onClick={UserActions.resetUser}> Cancel</Button>
      </div>
    );
  }
}
export default connectToStores(Login);