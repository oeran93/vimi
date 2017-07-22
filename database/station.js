const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Station = new Schema({
  location: String,
  lat: Number,
  lng: Number,
  time_zone: String,
  schedule: []
})

module.exports = mongoose.model('Station', Station, 'Station')
