const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {

    empid: {
      type: Number,
      required: true,
    },
    empname:{
         type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    department: {
      type: String,
      enum: ["IT", "Sales", "Management"],
      default: "IT",
    },

    designation: {
      type: String,
    },
    joiningdate: {
      type: Date,
    },

  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Employee", employeeSchema);
