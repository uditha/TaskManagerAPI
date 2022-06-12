const  mangoose = require('mongoose');


const connectDB = (url) => {
    return mangoose.connect(url);
}


module.exports = connectDB;