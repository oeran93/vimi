var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Order = new Schema ({
	_meal: {type: Schema.Types.ObjectId, ref: 'Restaurant'},
	date: Date
});

module.exports = mongoose.model('Order',Order,'Order');	