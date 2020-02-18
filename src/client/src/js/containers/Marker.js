import { connect } from 'react-redux'

import Marker from '../components/Marker'
import { removeLocation } from '../actions/locations'

const mapDispatchToProps = dispatch => {
    return {
        removeLocation: (lat, lng) => {
            dispatch(removeLocation(lat, lng))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Marker)
