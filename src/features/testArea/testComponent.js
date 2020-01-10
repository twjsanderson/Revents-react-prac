import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAsync, decrementAsync } from './testActions';
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './testPlaceInput';
import SimpleMap from './SimpleGoogleMap';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { openModal } from '../modals/modalActions';

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
      const { data, incrementAsync, decrementAsync, openModal, loading, buttonName } = this.props;
        return (
            <>
                <h1>Test</h1>
                <h3>State: {data}</h3>
                <Button 
                  name='increment' 
                  loading={buttonName === 'increment' && loading} 
                  onClick={(e) => incrementAsync(e.target.name)} 
                  color='red'
                >
                  Increment
                </Button>
                <Button 
                  name='decrement' 
                  loading={buttonName === 'decrement' && loading} 
                  onClick={(e) => decrementAsync(e.target.name)} 
                  color='yellow'
                >
                  Decrement
                </Button>
                <Button onClick={() => openModal('TestModal', {data: 42})} color='teal' content='Open Modal' />
                <br />
                <br />
                <TestPlaceInput selectAddress={this.handleSelect} />
                <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng} />
            </>
        )
    }
}

const actions = {
  incrementAsync,
  decrementAsync,
  openModal
};

// this pulls FROM the store and can be used as props in our application
const mapStateToProps = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName
});

export default connect(mapStateToProps, actions)(TestComponent);