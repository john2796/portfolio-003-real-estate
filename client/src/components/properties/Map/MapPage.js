import React, { Component } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";

class MapPage extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      initialLocation: [],
      loading: true
    };
  }
  componentDidMount(props) {
    this._isMounted = true;
    navigator.geolocation.getCurrentPosition(
      position => {
        if (this._isMounted) {
          const { latitude, longitude } = position.coords;
          this.setState({
            initialLocation: [
              ...this.state.initialLocation,
              { lat: latitude, lng: longitude }
            ],
            loading: false
          });
        }
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { initialLocation } = this.state;
    return (
      <Map center={[33.1605, -117.0978]} zoom={12} width={500} height={865}>
        {this.state.initialLocation.map((marker, index) => {
          return (
            <Marker
              key={index}
              anchor={[marker.lat, marker.lng]}
              payload={1}
              // onClick={({ event, anchor, payload }) => {}}
            />
          );
        })}
        <Overlay anchor={[33.1605, -117.0978]} offset={[120, 79]}>
          <img src="pigeon.jpg" width={240} height={258} alt="" />
        </Overlay>
      </Map>
    );
  }
}
export default MapPage;
