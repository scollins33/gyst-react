const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contacts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Contact",
        }
    ],
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event",
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;