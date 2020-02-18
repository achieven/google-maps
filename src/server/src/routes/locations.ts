import * as express from 'express'
const router = express.Router()

import { getLocations, createLocation, deleteLocation } from '../dao/locations'

router.get('/', async (req, res) => {
    try {
        const locations = await getLocations()
        res.send({error: false, content: locations})
    } catch (err) {
        return { error: true, content: err.message}
    }
})

router.post('/', async (req, res) => {
    const lat = req.body.lat
    const lng = req.body.lng
    //TODO validator function, common to all routes
    try {
        const response = await createLocation(lat, lng)
        res.send({error: false, content: response})
    } catch (err) {
        return {error: true, content: err.message}
    }
})

router.delete('/', async (req, res) => {
    try {
        return await deleteLocation()
    } catch (err) {
        return { error: true, content: err.message}
    }
})

export {
    router as router
}