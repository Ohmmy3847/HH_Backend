const mongoose = require("mongoose");
// A Mongoose schema defines the structure of the document,
// default values, validators, etc.
const { Schema } = mongoose;
const DataSchema = new Schema({
  _id: {
    type: String,
  },"Status": {
    type: String,
  },	"id": {
    type: String,
  },	"Group": {
    type: String,
  },	"Fullname": {
    type: String,
  },	"Nick": {
    type: String,
  },	"Age": {
    type: String,
  },	"Day": {
    type: String,
  },	"Power": {
    type: String,
  },	"Serious": {
    type: String,
  },	"Problem": {
    type: String,
  },	"Cause": {
    type: String,
  },	"Solution": {
    type: String,
  },	"Effect": {
    type: String,
  },	"XP": {
    type: String,
  },	"Coin": {
    type: String,
  },	"Special": {
    type: String,
  },	"Comment": {
    type: String,
  },	"Number": {
    type: String,
  },	"Course": {
    type: String,
  },	"CourseID": {
    type: String,
  },	"Code": {
    type: String,
  },	"Mobile": {
    type: String,
  },	"Line": {
    type: String,
  },	"Email": {
    type: String,
  },	"From": {
    type: String,
  },	"Interest": {
    type: String,
  },	"Experience": {
    type: String,
  },	"Goal": {
    type: String,
  },	"Impression": {
    type: String,
  },"Pro": {
    type: String,
  },	"Con": {
    type: String,
  },	"Stat": {
    type: String,
  },	"next Course": {
    type: String,
  },	"Expectation": {
    type: String,
  },	"Feedback": {
    type: String,
  },	"P-Name": {
    type: String,
  },	"P-URL": {
    type: String,
  },	"P-Image"	: {
    type: String,
  },"P-Quality": {
    type: String,
  },	"P-Detail": {
    type: String,
  },
 
});


module.exports = mongoose.model("Data", DataSchema, "Data");

