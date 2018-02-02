const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
> Interactions [1:Many]
			FK: User
			FK: Contact
			date (can be future)
			method (live, phone, email, etc)
			notes
 */

const InteractionSchema = new Schema({
    contact: {
        type: Schema.Types.ObjectId,
        ref: "Contact"
    },
    date: {
        type: String,
        required: true,
    },
    method: {
        type: String,
    },
    note: {
        type: String,
        required: true,
    }
});

const Interaction = mongoose.model('Interaction', InteractionSchema);

module.exports = Interaction;