var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Flat = new Schema({

  price:    {
    type    : Number,
    require : true
    },
    inflationPrice: {
    type    :  Number,
    },
    fairRentPrice: {
        type    : Number,
    },
  date: {
    type    : String
  },
  postcode: {
      type: String,
      require: true
  },
  type: {
      type: String,
      enum: ["F", "S", "T", "D"],
      require: true
  },
  age: {
      type: String,
      enum: ["N", "Y"],
      require: true
  },
  duration: {
      type: String,
      enum: ["L", "F"],
      require: true
  },
  saon: {
      type: String,
  },
  paon: {
      type: String,
  },
  street: {
      type: String,
  },
  locality: {
      type: String,
  },
  town: {
      type: String,
  },
  city: {
    type: String
  },
  county: {
      type: String
  }

});
 
module.exports = mongoose.model('Flat', Flat);
