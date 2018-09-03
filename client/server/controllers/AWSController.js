const aws = require('aws-sdk')
require('dotenv').config();

aws.config.region = 'us-west-2'; // Region
aws.config.credentials = new aws.Credentials(process.env.REACT_APP_AWS_ACCESS_KEY, process.env.REACT_APP_AWS_SECRET_KEY)

exports = module.exports = {
    sign: function(req, res, next) {
        var filename = req.body.filename
        var filetype = req.body.filetype
        var s3 = new aws.S3();
        var params = {
            Bucket: process.env.REACT_APP_SOME_BUCKET,
            Key: filename,
            Expires: 60,
            ContentType: filetype
        };
        s3.getSignedUrl("putObject", params, function(err, data) {
            if (err) {
                console.log(err);
                return err;
            } else {
                res.status(200).send(data);
            }
        });
    }
};

// const config = {
//   bucketName: process.env.REACT_APP_SOME_BUCKET,
//   dirName: 'user-input',
//   region: 'eu-west-2',
//   accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
//   secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
// }