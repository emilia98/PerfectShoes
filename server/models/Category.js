const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const categorySchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    slug: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    type: {
        type: mongoose.SchemaTypes.String,
        default: '1'
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

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;