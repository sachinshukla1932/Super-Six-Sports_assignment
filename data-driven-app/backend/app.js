const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

// Example route for file upload
app.post('/api/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "csvFile") is used to retrieve the uploaded file
    let csvFile = req.files.csvFile;

    // Use the mv() method to place the file somewhere on your server
    csvFile.mv(__dirname + '/uploads/' + csvFile.name, (err) => {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
