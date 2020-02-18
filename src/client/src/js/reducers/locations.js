import _ from 'lodash'

import { addLocationAction, removeLocationAction } from '../actions/locations'
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
        default:
            return state
    }
}

export default locations