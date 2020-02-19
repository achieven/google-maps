import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import { connect } from './database/mysql'

//TODO put in util function
const verifyEnvVariables = () => {
    const dbName     = process.env.DB_NAME
    const dbUsername = process.env.DB_USERNAME
    const dbPassword = process.env.DB_PASSWORD
    const dbHost     = process.env.DB_HOST
    const nodePort   = process.env.NODE_PORT

    if (!dbName || !dbUsername || !dbPassword || !dbHost || !nodePort) {
        console.error('usage: DB_NAME=$DB_NAME DB_USERNAME=$DB_USERNAME DB_PASSWORD=$DB_PASSWORD DB_HOST=$DB_HOST NODE_PORT=$NODE_PORT node dist/index.js')
        process.exit()
    }
    
    return { dbName, dbUsername, dbPassword, dbHost, nodePort }
}

const envVariables = verifyEnvVariables()
connect()
const app = express()

//TODO check if can import earlier (see TODO in mysql.ts)
import { router as locationRouter } from './routes/locations'
app.listen(envVariables.nodePort, () => {
    console.log(`listening on port ${envVariables.nodePort}`)
})
//TODO protect from other attacks, possibly using helmet.js
app.use(cors(
    {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    }
))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/location', locationRouter)
