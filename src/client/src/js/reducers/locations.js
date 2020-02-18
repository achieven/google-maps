import _ from 'lodash'

import { addLocationAction, removeLocationAction, getLocationsAction } from '../actions/locations'
import { locationToKey } from '../util/locations'


const locations = (state = {}, action) => {
    let currentState
    switch (action.type) {
        case addLocationAction:
            currentState = _.cloneDeep(state)
            currentState[locationToKey(action)] = action
            return currentState
        case removeLocationAction:
            currentState = _.cloneDeep(state)
            delete currentState[locationToKey(action)]
            return currentState
        case getLocationsAction:
            const locations = action.locations
            currentState = _.cloneDeep(state)
            locations.forEach((location) => {
                currentState[locationToKey(location)] = location
            })
            return currentState
        default:
            return state
    }
}

export default locations