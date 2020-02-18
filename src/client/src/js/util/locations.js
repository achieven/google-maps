export const locationToKey = (action) => {
    return `${action.lat}_${action.lng}`
}