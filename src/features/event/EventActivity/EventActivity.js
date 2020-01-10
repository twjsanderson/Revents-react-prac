import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const EventActivity = () => {
    return (
        <>
            <Header attached='top'>
                Recent Activity
            </Header>
            <Segment attached>
                <p>Recent activity</p>
            </Segment>
        </>
    );
}

export default EventActivity;