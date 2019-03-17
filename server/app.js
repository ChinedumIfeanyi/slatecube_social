import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import dotenv from 'dotenv'

//configuration file
import config from "./config"

dotenv.config()

const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//database connection 



export default app