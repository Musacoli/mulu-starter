import createError from 'http-errors'
import express from 'express'
// import path from 'path';
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

import { apiResponse } from './middleware'
import appRouter from './routes'
import { dbConnect } from './models'

const app = express()

// initiate a connection to mongoDb
dbConnect()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use((req, res, next) => apiResponse(req, res, next))

// handle all routing logic and initialisation associated with app
appRouter(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
