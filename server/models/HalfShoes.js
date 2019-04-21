const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const halfShoesSchema = new mongoose.Schema({
    title: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
  
    price: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
   
    mainImg: {
        type: mongoose.SchemaTypes.String,
        default: 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png'
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

const HalfShoes = mongoose.model('HalfShoes', halfShoesSchema);

module.exports = HalfShoes;