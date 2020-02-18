import { Sequelize } from 'sequelize'

let sequelize = null

//TODO check if can use single function for all callers, the first that initializes "wins"
const getSequelize = (dbName = null, dbUsername = null, dbPassword = null, dbHost = null) => {
    if (null === sequelize) {
        sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
            host: dbHost,
            port: 3306,
            dialect: 'mysql'
        })
    }
    return sequelize
}

const connect = async (): Promise<Sequelize> => {
    const dbName     = process.env.DB_NAME
    const dbUsername = process.env.DB_USERNAME
    const dbPassword = process.env.DB_PASSWORD
    const dbHost     = process.env.DB_HOST
    const _sequelize = getSequelize(dbName, dbUsername, dbPassword, dbHost)
    try {
        await _sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
    
    
    return _sequelize
}

export {
    getSequelize as getSequelize,
    connect as connect
}