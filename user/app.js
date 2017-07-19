const express     = require('express')
const app         = express()
const body_parser = require('body-parser')
const session     = require('client-sessions')
const env         = process.env

const delivery_router = require('./router.js')
const auth_router   = require('../auth/routing/user.js')

module.exports = function (db) {
  //start DB
  db()
  //set up express
  app.use(body_parser.json())
  app.use(body_parser.urlencoded({extended: true}))
  app.use(session(
    {
      cookieName: 'session',
      secret: env.VIMI_SESSION_SCRT,
      duration: 15 * 24 * 60 * 1000,
      activeDuration: 2 * 24 * 60 * 1000
    }
  ))

  /*Serving static content*/
  app.use(express.static(__dirname + '/views/static'))

  /*Modules Router*/
  delivery_router(app)
  auth_router(app)

  return app
}