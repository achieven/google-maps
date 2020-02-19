import { connect } from 'react-redux'

import Marker from '../components/Marker'
import { removeLocation } from '../actions/locations'

//TODO add spinner, also in mapDispatchToProps  of Map container
const mapDispatchToProps = dispatch => {
    return {
        removeLocation: async (id) => {
            const action = await removeLocation(id)
            dispatch(action)
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Marker)
