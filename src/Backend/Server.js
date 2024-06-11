const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const multer = require("multer");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bitlinks",
  connectionLimit: 500,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid filename conflicts
  },
});

const upload = multer({ storage: storage });

  


//   const {
//     personinfo,
//     previousexperience,
//     companyinfo,
//     expertiseinfo,
//     alumniinfo,
//     outcomeinfo,
//     incidentsinfo,
//     placementinfo,
//     consultancyinfo,
//     internshipinfo,
//     ifexperience,
//     ifplacement,
//     ifconsultancy,
//     ifinternship,
//     reference,
//   } = req.body;
app.post('/api/upload', upload.single('file'), (req, res) => {
  console.log('Received file upload request');
  console.log('File info:', req.file);

  const { filename } = req.file;
  const imagePath = `/uploads/${filename}`;

  // Insert the image path into the database
  const imageData = {
    mime_type: req.file.mimetype,
    path: imagePath,
  };

  console.log(imagePath);
  res.status(200).json({ message: 'Image path stored successfully', path: imagePath });

  // connection.query('INSERT INTO images SET ?', imageData, (error, results, fields) => {
  //   if (error) {
  //     console.error('Error storing image path:', error);
  //     res.status(500).send('Error storing image path');
  //   } else {
  //     console.log('Image path stored in the database:', imagePath);
  //     res.status(200).json({ message: 'Image path stored successfully', path: imagePath });
  //   }
  // });
});
   

app.post("/api/signin", (req, res) => {
  const { name, email, picture } = req.body;

  console.log(name);

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({ message: "Database error" });
    }

    const sql = "INSERT into login (NAME, EMAIL, PROFILE) VALUES (?,?,?)";
    connection.query(sql, [name, email, picture], (err, results) => {
      connection.release();

      if (err) {
        console.error("Error executing database query:", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (results.length > 0) {
        res.status(200).json({ message: "Signin successful" });
      } else {
        res.status(401).json({ message: "Error from server" });
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
