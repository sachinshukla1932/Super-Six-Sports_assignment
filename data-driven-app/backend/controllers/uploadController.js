const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { CsvData } = require('../models');

exports.uploadCsv = async (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded.');

  const file = req.files.csvFile;
  const results = [];
  const filePath = path.join(__dirname, '..', 'uploads', file.name);

  file.mv(filePath, err => {
    if (err) return res.status(500).send(err);

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        await CsvData.bulkCreate(results);
        res.send('File uploaded and data saved.');
      });
  });
};
