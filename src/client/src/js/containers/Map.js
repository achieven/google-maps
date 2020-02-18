import { connect } from 'react-redux'

import Map from '../components/Map'
import { addLocation } from '../actions/locations'

const mapStateToProps = state => {
    return  {
        locations: state.locations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addLocation: ({x, y, lat, lng, event}) => {
            dispatch(addLocation({x, y, lat, lng}))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map)
