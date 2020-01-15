// use NavLink with pre-made components to direct to new pages using as={} && to="..." this also sets class to active (css highlight)
// use Link to do the same thing on buttons

import React, { Component } from 'react';
import {connect} from 'react-redux';
// withFirebase is an HOC that gives us access to firebase functionality,
// we can use this when we don't need new data from firebase or we don't require a listener 
import { withFirebase } from 'react-redux-firebase'; 
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { openModal } from '../../modals/modalActions';
import { logout } from '../../auth/authActions';

const actions = {
  openModal,
  logout
}

const mapState = (state) => ({
  auth: state.firebase.auth
})

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  }

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/events');
  } 

  render() {
    const { auth } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='/assets/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} exact to='/events' name='Events' />
          {
            authenticated &&
            <>
              <Menu.Item as={NavLink} to='/people' name='People' />
              <Menu.Item as={NavLink} to='/test' name='Test' />
              <Menu.Item>
                <Button
                  as={Link}
                  to='/createEvent'
                  floated='right'
                  positive
                  inverted
                  content='Create Event'
                />
              </Menu.Item>
            </>
          }
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} auth={auth} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));