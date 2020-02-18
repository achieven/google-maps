export const addLocationAction    = 'ADD_LOCATION'
export const removeLocationAction = 'REMOVE_LOCATION'

export const addLocation = id => {
    return {
        type: addLocationAction,
        id: id
    }
}

export const removeLocation = id => {
    return {
        type: removeLocationAction,
        id: id
    }
}