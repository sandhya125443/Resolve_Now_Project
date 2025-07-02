
const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
    name: String,
    email: String,
    complaint: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
