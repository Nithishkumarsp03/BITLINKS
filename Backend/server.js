const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bitlinks",
  connectionLimit: 200,
});


app.post("/api/google", (req, res) => {
    const { name } = req.body;
  
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error getting database connection:", err);
        return res.status(500).json({ message: "Database error" });
      }
  
      connection.query(
        "SELECT * FROM login WHERE NAME = ?",
        [name],
        (err, results) => {
          connection.release();
  
          if (err) {
            console.error("Error executing database query:", err);
            return res.status(500).json({ message: "Database error" });
          }
  
          if (results.length > 0) {
            res
              .status(200)
              .json({ message: "Login successful" });
          } else {
            res.status(401).json({ message: "Invalid username or password" });
          }
        }
      );
    });
});


app.post("/api/check-connection", (req, res) => {
  const { name } = req.body;
  const normalizedName = name.trim().toLowerCase(); // Normalize the input name

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }

    connection.query(
      "SELECT * FROM personalinfo WHERE LOWER(fullname) = ?",
      [normalizedName],
      (err, results) => {
        connection.release();

        if (err) {
          console.error("Error executing database query:", err);
          return res.status(500).json({ message: "Database error" });
        }

        if (results.length > 0) {
          res.status(200).json({ message: "found" });
        } else {
          res.status(401).json({ message: "notfound" });
        }
      }
    );
  });
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});