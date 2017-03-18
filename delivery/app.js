const express     = require('express')
const app         = express()
const body_parser = require('body-parser')
const session     = require('client-sessions')
const env         = process.env

const sharer_router = require('./routing/router.js')
const auth_router   = require('../auth/local/router.js')

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
  app.use(express.static(__dirname + '/views/static'))
  sharer_router(app)
  auth_router(app)
  return app
}
