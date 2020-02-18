import { Sequelize, DataTypes, Model } from 'sequelize'
import { getSequelize } from '../database/mysql'
const sequelize: any = getSequelize()

class Location extends Model {}
//TODO make sure no attacks such as xss, sqlinjection can occur (query builder)
Location.init({
    lat: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    lng: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Location'
})
Location.sync()

const getLocations = async () => {
    return await Location.findAll()
}

const createLocation = async (lat: number, lng: number) => {
    return await Location.create({lat, lng})
}

const deleteLocation = async () => {
    //TODO implement, need to index the field/s which identifies the deleted location
}

export {
    getLocations as getLocations,
    createLocation as createLocation,
    deleteLocation as deleteLocation
}