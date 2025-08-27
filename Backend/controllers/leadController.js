const Lead = require("../models/Lead");

const getLeads = async (req, res) => {
  try {
    const { search, conditions, matchType = "AND" } = req.query;

    let query = {};

    // Handle search
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { status: { $regex: search, $options: "i" } },
        { qualification: { $regex: search, $options: "i" } },
        { interestField: { $regex: search, $options: "i" } },
        { source: { $regex: search, $options: "i" } },
        { assignedTo: { $regex: search, $options: "i" } },
      ];
    }

    // Handle advanced filters
    if (conditions) {
      const parsed = JSON.parse(conditions);
      const filterQueries = parsed
        .filter((c) => c.value.trim() !== "")
        .map((c) => ({ [c.field]: { $regex: c.value, $options: "i" } }));

      if (filterQueries.length > 0) {
        if (matchType === "AND") {
          query.$and = query.$and
            ? [...query.$and, ...filterQueries]
            : filterQueries;
        } else {
          query.$or = query.$or
            ? [...query.$or, ...filterQueries]
            : filterQueries;
        }
      }
    }

    const leads = await Lead.find(query).sort({ updatedAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });

    await lead.remove();
    res.json({ message: "Lead removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getLeads, createLead, deleteLead };
