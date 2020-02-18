export const addLocationAction    = 'ADD_LOCATION'
export const removeLocationAction = 'REMOVE_LOCATION'

export const addLocation = ({x, y, lat, lng}) => {
    return {
        type: addLocationAction,
        x: x,
        y: y,
        lat: lat,
        lng: lng
    }
}

export const removeLocation = (lat, lng) => {
    return {
        type: removeLocationAction,
        lat: lat,
        lng: lng
    }
}