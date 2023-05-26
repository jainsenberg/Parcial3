const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();


// dotenv.config();

exports.DBconnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Base melita");
    } catch (error) {
        console.log(error);
        throw new Error("Diablooooooooos");
    }
};
