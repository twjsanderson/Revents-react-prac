import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

// use NavLink with pre-made components to direct to new pages using as={} && to="..." this also sets class to active (css highlight)
// use Link to do the same thing on buttons

class NavBar extends Component {
    state = {
        authenticated: true
    };
    
    handleSignIn = () => this.setState({ authenticated: true });
    handleSignOut = () => {
        this.setState({ authenticated: false });
        this.props.history.push('/');
    }

    render() {
        const { authenticated } = this.state;
        return (
            <Menu inverted fixed='top'>
                <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src='/assets/logo.png' alt='logo' />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/events' name='Events' />
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
                        <SignedInMenu signOut={this.handleSignOut} />
                    ) : (
                        <SignedOutMenu signIn={this.handleSignIn} />
                    )}
                </Container>
            </Menu>
        );
    }
}

export default withRouter(NavBar);