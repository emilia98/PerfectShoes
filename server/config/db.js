const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    const db = mongoose.connection;

    db.once('open', (err) => {
        if(err) throw err
    });

    db.on('error', (err) => {
        console.log(err);
    });

    require('../models/User').seedAdminUser();
    require('../models/Brand');
    require('../models/Category');
    require('../models/HalfShoes');
}