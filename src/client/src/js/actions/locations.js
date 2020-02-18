import { httpService, methods } from '../services/httpService'

export const addLocationAction    = 'ADD_LOCATION'
export const removeLocationAction = 'REMOVE_LOCATION'
export const getLocationsAction   = 'GET_LOCATIONS'

export const getLocations = async () => {
    const locations = await httpService('location')
    return {
        type: getLocationsAction,
        locations: locations
    }
}

export const addLocation = async (lat, lng) => {
    const newLocation = await httpService('location', {
        method: methods.POST,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({lat, lng})
    })
    return {
        type: addLocationAction,
        ...newLocation
    }
}

export const removeLocation = (lat, lng) => {
    //TODO implement with backend (decide if deleting by id or by key)
    return {
        type: removeLocationAction,
        lat: lat,
        lng: lng
    }
}