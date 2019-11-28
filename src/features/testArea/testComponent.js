import React, { Component } from 'react';
import { connect } from 'react-redux';
import {incrementCounter, decrementCounter} from './testActions';
import { Button } from 'semantic-ui-react';

class TestComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter } = this.props;
        return (
            <>
                <h1>Test</h1>
                <h3>State: {data}</h3>
                <Button onClick={() => incrementCounter()}>Increment</Button>
                <Button onClick={() => decrementCounter()}>Decrement</Button>
            </>
        )
    }
}

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
}

// this pulls FROM the store and can be used as props in our application
const mapStateToProps = (state) => ({
    data: state.test.data
});

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);