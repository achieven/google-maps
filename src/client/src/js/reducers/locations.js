import _ from 'lodash'

import { addLocationAction, removeLocationAction } from '../actions/locations'


const locations = (state = {}, action) => {
    let currentState
    switch (action.type) {
        case addLocationAction:
            currentState = _.cloneDeep(state)
            currentState[`${action.lat}_${action.lng}`] = action
            return currentState
        case removeLocationAction:
            currentState = _.cloneDeep(state)
            return currentState
        default:
            return state
    }
}
export default locations