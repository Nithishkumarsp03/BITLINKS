const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const multer = require("multer");
const fs = require('fs'); // Make sure this line is included
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination folder for uploaded files
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Set the filename for the uploaded file
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });

// Create the uploads directory if it doesn't exist
const uploadsDir = 'uploads/';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ path: `/uploads/${req.file.filename}` });
});

app.post("/api/person", (req, res) => {
  const { personInfo, imagePath, email } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }

    let sql = `
      INSERT INTO personalinfo (useremail, fullname, phonenumber, age, email, linkedinurl, address, shortdescription)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [ 
      email,
      personInfo.fullname, // Adjusted to match frontend
      personInfo.phoneNumber,
      personInfo.age,
      personInfo.email,
      personInfo.linkedinUrl,
      personInfo.address,
      personInfo.shortDescription,
    ];

    // If imagePath is provided, include it in the SQL query and values
    if (imagePath) {
      sql = `
        INSERT INTO personalinfo (useremail, profile, fullname, phonenumber, age, email, linkedinurl, address, shortdescription)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      values.splice(1, 0, imagePath);
    }

    connection.query(sql, values, (err, results) => {
      connection.release();

      if (err) {
        console.error("Error executing database query:", err);
        return res.status(500).json({ message: "Database error" });
      }

      res.status(200).json({ message: "Profile saved successfully" });
    });
  });
});

app.get('/api/userNetworks', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }

    const sql = `SELECT * FROM personalinfo`; // Adjust the SQL query based on your schema
    connection.query(sql, (err, results) => {
      connection.release();

      if (err) {
        console.error("Error executing database query:", err);
        return res.status(500).json({ message: "Database error" });
      }

      res.json(results);
    });
  });
});


app.post('/api/userConnections', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }

    const sql = 'SELECT * FROM personalinfo WHERE useremail = ?';
    connection.query(sql, [email], (err, results) => {
      connection.release();

      if (err) {
        console.error("Error executing database query:", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "No data found for the given email" });
      }

      res.json(results); // Return all results as an array
    });
  });
});


// Endpoint to add history
app.post('/api/addhistory', (req, res) => {
  const {  type, note, points, created_date,scheduled_date  } = req.body;

  if (!type  || points === undefined) {
    return res.status(400).send('Invalid data');
  }

  const query = 'INSERT INTO history ( type, note, points, created_date,scheduled_date ) VALUES (?, ?, ?, ?, ?)';
  pool.query(query, [ type, note, points, created_date,scheduled_date ], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Server error');
    }
    res.send('History added successfully');
  });
});

app.get('/api/history', (req, res) => {
  const query = 'SELECT type, note, points, created_date,scheduled_date FROM history';
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});