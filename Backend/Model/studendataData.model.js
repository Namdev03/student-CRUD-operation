const { Schema, model } = require('mongoose')

const studentSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  course: {
    type: String,
    enum: ["Mern Stack", "Data Analytic", "Digital Marketing", "DSA"],
    required: true
  },
  contactNo: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/ // basic 10-digit validation
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timeseries: true,
  timestamps: true
});
module.exports = model("student_Data", studentSchema)
