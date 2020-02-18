import * as express from 'express'
import * as bodyParser from 'body-parser'
import { connect } from './database/mysql'

const verifyCmdArguments = () => {
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

const envVariables = verifyCmdArguments()
connect()
const app = express()

import { router } from './routes/locations' //TODO check if can import earlier (see TODO in mysql.ts)
app.listen(envVariables.nodePort, () => {
    console.log(`listening on port ${envVariables.nodePort}`)
})
//TODO protect from other attacks, possibly using helmet.js
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/location', router)
