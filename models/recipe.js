const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    ingredients:[{
        type: String,
        required: true,
    }],
    instructions:[{
        type: String,
        required: true,
    }],
},{
    timestamps: true,
});

module.exports = mongoose.model('Recipe', recipeSchema);