const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userFinances = new Schema({
    rent: {
        type: Number,
        required: true,
    },
    utilities: {
        type: Number,
        required: true,
    },
    transportation: {
        type: Number,
        required: true,
    },
});

const Finances = mongoose.model("Finances", userFinances);

module.exports = Finances;