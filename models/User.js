const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    department: {
      type: String,
    },
  },
  {
    timestamps: true, //createdAt and UpdatedAt automatically added by mongoDB
  },
);

module.exports = mongoose.model("User", userSchema);
