import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import {openModal} from '../../modals/modalActions';
import {logout} from '../../auth/authActions';

// use NavLink with pre-made components to direct to new pages using as={} && to="..." this also sets class to active (css highlight)
// use Link to do the same thing on buttons

const mapState = (state) => ({
    auth: state.auth
})

const actions = {
    openModal,
    logout
}

class NavBar extends Component {
    
    handleSignIn = () => {
        this.props.openModal('LoginModal');
    };

    handleRegister = () => {
        this.props.openModal('RegisterModal')
    };

    handleSignOut = () => {
        this.props.logout();
        this.props.history.push('/');
    };

    render() {
        const { auth } = this.props;
        const authenticated = auth.authenticated
        return (
            <Menu inverted fixed='top'>
                <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src='/assets/logo.png' alt='logo' />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} exact   to='/events' name='Events' />
                <Menu.Item as={NavLink} to='/people' name='People' />
                <Menu.Item as={NavLink} to='/test' name='Test' />
                <Menu.Item>
                    <Button 
                        as={Link} 
                        to="/createEvent" 
                        floated='right' 
                        positive 
                        inverted 
                        content='Create Event' 
                    />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login' />
                    <Button
                        basic
                        inverted
                        content='Sign Out'
                        style={{ marginLeft: '0.5em' }}
                    />
                </Menu.Item>
                    {authenticated ? (
                        <SignedInMenu signOut={this.handleSignOut} currentUser={auth.currentUser} />
                    ) : (
                        <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
                    )}
                </Container>
            </Menu>
        );
    }
}

export default withRouter(connect(mapState, actions)(NavBar));