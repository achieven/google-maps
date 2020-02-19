import _ from 'lodash'

import { addLocationAction, removeLocationAction, getLocationsAction } from '../actions/locations'


const locations = (state = {}, action) => {
    let currentState
    switch (action.type) {
        case addLocationAction:
            currentState = _.cloneDeep(state)
            currentState[action.id] = action
            return currentState
        case removeLocationAction:
            currentState = _.cloneDeep(state)
            delete currentState[action.id]
            return currentState
        case getLocationsAction:
            const locations = action.locations
            currentState = _.cloneDeep(state)
            locations.forEach((location) => {
                currentState[location.id] = location
            })
            return currentState
        default:
            return state
    }
}

export default locations