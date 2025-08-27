const Lead = require("../models/Lead");

const createLead = async (req, res) => {
  try {
    const { name, email, phone, ...rest } = req.body;

    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ message: "Name, Email, and Phone are required" });
    }

    const lead = await Lead.create({ name, email, phone, ...rest });
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createLead };
