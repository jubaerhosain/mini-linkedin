import express from 'express';
import multer from 'multer';
import * as Minio from 'minio';
const app = express();
const upload = multer();

import minioClient from '../config/minioClient.js';

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    const fileStream = file.buffer; // Access the file data from the buffer

    // Upload the file to Minio
    minioClient.putObject('minilinkedin', file.originalname, fileStream, (err, etag) => {
        if (err) {
            console.error('Error uploading file to Minio:', err);
            res.status(500).send('Error uploading file');
        } else {
            console.log('File uploaded successfully:', etag);
            res.status(200).send('File uploaded');
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
