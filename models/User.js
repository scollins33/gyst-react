const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

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
    // Contacts for the Social Page
    // 1:Many Relation, array
    contacts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Contact"
        }
    ],
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event"
        }
    ]
});


const User = mongoose.model("User", UserSchema);

module.exports.createUser = function(newUser, callback){
    bcrypt.gensalt(10,function(err,salt){
        bcrypt.hash(newUser.password, salt, function(err,hash){
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports = User;

module.exports.getUserByUsername = function (username, callback) {

    User.findById(id, callback);
}

module.exports.getUserById = function (username, callback) {
    var query = {username: username};
    User.findOne(query, callback);
}
    
    module.exports.comparePassword = function(candidatePassword, hash, callback) {
        bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
            if (err) throw err;
            callback(null, isMatch);
        });
    }
    
}