// File that needs to be uploaded.
import fileUtils from "../utils/fileUtils.js"
import path from "path";
const file = path.join(fileUtils.getDirectoryName(import.meta.url), "../admin.png")
import minioClient from "../config/minioClient.js"

var metaData = {
    'Content-Type': 'application/octet-stream',
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
}

// Using fPutObject API upload your file to the bucket europetrip.
minioClient.fPutObject('minilinkedin', 'admin.png', file, metaData, function (err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.')
    console.log(etag);
});
