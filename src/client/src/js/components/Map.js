import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

import Marker from './Marker'

import '../../css/index.scss'

const API_KEY = 'AIzaSyDMuj0_dl564YZr7DtlL3uuZzNDqqN18bg'

class Map extends Component  {

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onClick={this.props.addLocation}
                >
                    {this.props.locations ? Object.keys(this.props.locations).map(location => {
                        return <Marker lat={location.lat} lng={location.lng}/>
                    }) : null}
                </GoogleMapReact>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }
    
}



export default Map
