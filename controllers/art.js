const Art = require('../models/art');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3();

const BUCKET_NAME = process.env.AWS_BUCKET;

module.exports = {
    create,
    index,
}

function create(req, res) {
    console.log(req.file, req.body, 'the create method', req.user);
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`;
        const params = {
            Bucket: BUCKET_NAME,
            Key: filePath,
            Body: req.file.buffer,
        };
        s3.upload(params, async function (err, data) {
            if (err) {
                console.log(err);
                res.json({ data: err });
            }
            console.log(data, 'this data');
            const post = await Art.create({
                user: req.user,
                title: req.body.title,
                // file: 
            });

            const populatedPost = await post.populate('user').execPopulate();

            res.status(201).json({ post: populatedPost });
        });
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
}

async function index(req, res) {
    try {
        const posts = await Art.find({}).populate('user').exec();
        res.status(200).json({ posts });
    } catch (err) {}
}