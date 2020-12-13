var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    crName: String,
    crDuration: String,
    crFee: Number
});

var Course = mongoose.model("Course",courseSchema);

module.exports = Course;