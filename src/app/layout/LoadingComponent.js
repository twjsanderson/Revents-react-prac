import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent = () => {
    return (
        <div>
            <Dimmer inverted={inverted} active={true}>
                <Loader content='Loading...' />
            </Dimmer>
        </div>
    )
}

export default LoadingComponent;
