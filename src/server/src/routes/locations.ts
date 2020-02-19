import * as express from 'express'
const router = express.Router()

import { getLocations, createLocation, deleteLocation } from '../dao/locations'

//TODO check if can marshal the response
//TODO handle errors

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

router.put('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await deleteLocation(id)
        return res.send({error: false, content: true})
    } catch (err) {
        return { error: true, content: err.message}
    }
})

export {
    router as router
}