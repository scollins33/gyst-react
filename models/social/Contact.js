const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
	Contact
		> FK: User
		> Name [1:1]
			one field
		> Favorite [1:1]
			true / false flag
		> Relation [1:1]
			type (fits to a badge filter)
			text field
		> Contact [1:1]
			mobile
			email
			work
			home
		> Birthday [1:1]
			date field
		> Interactions [1:Many]
			FK: User
			FK: Contact
			date (can be future)
			method (live, phone, email, etc)
			notes
 */

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    relation: {
        type: String,
    },
    methods: {
        home: {
            type:
        }
    }
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
