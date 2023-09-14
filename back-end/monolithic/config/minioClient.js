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
        console.log("Error connecting to minio...");
        console.error(err);
        return;
    }

    console.log("Successfully connected to minio...");
    console.log("list of buckets: ", buckets);
});

export default minioClient;
