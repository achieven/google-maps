import React, { Component } from 'react'

import '../../css/marker.scss'

class Marker extends Component {
    
    render() {
        return <>
            <div className="pin" onClick={this.props.removeLocation.bind(this, this.props.lat, this.props.lng)}></div>
            <div className="pulse"></div>
        </>
    }
    
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false
    }
}

export default Marker