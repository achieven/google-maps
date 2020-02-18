import { addLocationAction, removeLocationAction } from '../actions/locations'


const locations = (state = {}, action) => {
    switch (action.type) {
        case addLocationAction:
            return action.filter
        case removeLocationAction:
            return action.filter
        default:
            return state
    }
}
export default locations