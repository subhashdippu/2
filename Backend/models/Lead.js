const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    phone: {
      type: Number,
      required: true,
    },
    altPhone: {
      type: Number,
      default: "",
    },
    email: { type: String, required: true },

    status: {
      type: String,
      enum: ["New", "In Progress", "Converted", "Qualified", "Follow-Up"],
      default: "New",
    },
    qualification: {
      type: String,
      enum: ["High School", "Bachelor's", "Master's", "Other"],
      default: "",
    },
    interestField: {
      type: String,
      enum: ["Web Development", "Data Science", "UI/UX Design", "Other"],
      default: "",
    },
    source: {
      type: String,
      enum: ["Website", "Social Media", "Email Campaign", "Cold Call", "Other"],
      default: "",
    },
    assignedTo: {
      type: String,
      default: "",
    },
    jobInterest: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    passoutYear: {
      type: String,
      default: "",
    },
    heardFrom: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);
