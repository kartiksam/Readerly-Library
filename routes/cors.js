const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://readerlylibraryapp.onrender.com', 'https://readerlylibrary.netlify.app'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);