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
        addLocation: async ({lat, lng}) => {
            const newLocation = await addLocation(lat, lng)
            dispatch(newLocation)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map)
