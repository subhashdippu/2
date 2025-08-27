const express = require("express");
const router = express.Router();
const { createLead, deleteLead } = require("../controllers/leadController");

router.route("/").post(createLead);
router.route("/:id").delete(deleteLead);

module.exports = router;
