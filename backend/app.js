
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Complaint = require('./models/Complaint');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/resolvenow', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post('/complaints', async (req, res) => {
    const complaint = new Complaint(req.body);
    try {
        await complaint.save();
        res.status(201).send(complaint);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/complaints', async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).send(complaints);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(5000, () => console.log('Server started on port 5000'));
