import React from 'react';
import {
  withGoogleMap,
  GoogleMap
} from 'react-google-maps';
import _ from 'lodash';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}>
  </GoogleMap>
));
// Then, render it:

const SimpleMapExample = () =>
  <GettingStartedGoogleMap
    containerElement={
      <div style={{ height: '100%' }} />
    }
    mapElement={
      <div style={{ height: '100%' }} />
    }
    onMapLoad={_.noop}
    onMapClick={_.noop}
    onMarkerRightClick={_.noop}
  />;

export default SimpleMapExample;
