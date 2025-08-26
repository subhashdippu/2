const express = require("express");
const router = express.Router();
const {
  getLeads,
  createLead,
  deleteLead,
} = require("../controllers/leadController");

router.route("/").get(getLeads).post(createLead);
router.route("/:id").delete(deleteLead);

module.exports = router;
