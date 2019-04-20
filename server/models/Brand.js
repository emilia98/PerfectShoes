const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const brandSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    createdOn: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now()
    },
    isActive: {
        type: mongoose.SchemaTypes.Boolean,
        default: true
    }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;