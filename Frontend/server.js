const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
// connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
