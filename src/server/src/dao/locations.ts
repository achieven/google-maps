import { Sequelize, DataTypes, Model } from 'sequelize'
import { getSequelize } from '../database/mysql'
const sequelize: any = getSequelize()

class Location extends Model {}
//TODO make sure no attacks such as xss, sqlinjection can occur (query builder)
//TODO make ids be random, not sequential
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

//TODO try catch
const getLocations = async () => {
    return await Location.findAll()
}

const createLocation = async (lat: number, lng: number) => {
    return await Location.create({lat, lng})
}

const deleteLocation = async (id) => {
    return await Location.destroy(
        {
            where: {
                id: id
            }
        }
    )
}

export {
    getLocations as getLocations,
    createLocation as createLocation,
    deleteLocation as deleteLocation
}