const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = new Schema({
  phone: {type: String, required: true, unique: true},
  code: String,
  activated: String,
  name: String,
  pwd: String,
  salt: String,
  station: {type: Schema.Types.ObjectId, ref: 'Station'},
  last_4_digits: "",
  stripe_id: "",
  created_at: Date
})

module.exports = mongoose.model('User', User, 'User')