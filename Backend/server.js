const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3100;

app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Ensure form-images folder exists in the frontend assets folder
const formImagesPath = path.join(__dirname, '../src/assets/form-images');
if (!fs.existsSync(formImagesPath)) {
  fs.mkdirSync(formImagesPath); // Create the directory if it doesn't exist
}

// Multer setup to save files in Angular's src/assets/form-images folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, formImagesPath); // Save to the Angular app's assets folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname); // Unique filename
  }
});

const upload = multer({ storage: storage });

// Endpoint to handle form submission and image upload
app.post('/ads', upload.single('image'), (req, res) => {
  const adData = {
    id: Date.now(),
    location: req.body.location,
    mobileType: req.body.mobileType,
    brand: req.body.brand,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: `../../assets/form-images/${req.file.filename}` // Relative path to the image
  };

  // Append the ad data to db.json
  fs.readFile('db.json', (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data);
    json.ads.push(adData);

    fs.writeFile('db.json', JSON.stringify(json, null, 2), (err) => {
      if (err) throw err;
      res.status(200).json(adData);
    });
  });
});

// Endpoint to get ads
app.get('/ads', (req, res) => {
  fs.readFile('db.json', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read data' });
    }
    const ads = JSON.parse(data).ads;
    res.status(200).json(ads);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
