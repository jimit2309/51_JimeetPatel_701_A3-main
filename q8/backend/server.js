const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");
const studentRoutes = require("./routes/student");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/student", studentRoutes);

sequelize.sync()
  .then(() => {
    console.log("MySQL connected");

    app.listen(5000, () => {
      console.log("Server running at http://localhost:5000");
    });
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });