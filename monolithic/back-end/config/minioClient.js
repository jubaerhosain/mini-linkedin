import * as Minio from "minio";
import config from "./config.js";

const minioClient = new Minio.Client({
    endPoint: config.minio.endPoint,
    port: config.minio.port,
    useSSL: false,
    accessKey: config.minio.accessKey,
    secretKey: config.minio.secretKey,
});

minioClient.listBuckets((err, buckets) => {
    if (err) {
        return console.log(err);
    }
    console.log("Buckets:", buckets);
});
