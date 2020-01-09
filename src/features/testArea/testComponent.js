import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './testPlaceInput';
import SimpleMap from './SimpleGoogleMap';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class TestComponent extends Component {
    state = {
        latlng: {
          lat: 59.95,
          lng: 30.33
        }
    };

    handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            this.setState({
              latlng: latLng
            });
          })
          .catch(error => console.error('Error', error));
      };

    render() {
        const {data, incrementCounter, decrementCounter } = this.props;
        return (
            <>
                <h1>Test</h1>
                <h3>State: {data}</h3>
                <Button onClick={() => incrementCounter()}>Increment</Button>
                <Button onClick={() => decrementCounter()}>Decrement</Button>
                <br />
                <br />
                <TestPlaceInput selectAddress={this.handleSelect} />
                <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng} />
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