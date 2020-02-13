import React from 'react'
import { Button, Icon } from 'semantic-ui-react';

// did not setup facebook login

const SocialLogin = ({ socialLogin }) => {
    return (
        <>
            {/* <Button
                type='button'
                onClick={() => socialLogin('facebook')}
                style={{ marginBottom: '10px' }}
                fluid 
                color='facebook'
            >
                <Icon name='facebook' />
                Login With Facebook
            </Button> */}
            <Button
                type='button'
                onClick={() => socialLogin('google')}
                fluid 
                color='google plus'
            >
                <Icon name='google plus' />
                Login With Google
            </Button>
        </>
    )
}

export default SocialLogin;
