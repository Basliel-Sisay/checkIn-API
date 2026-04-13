const express = require('express');
const db = require('./database');
 const test = express();
 test.use(express.json());
 test.get('/', (req, res)=>{
    res.send('Welcome to your CheckIn-API');
 });
test.get('/history', (req,res)=>{
    db.getHistory((err,rows)=>{
        if(err){
            res.status(500).send("Database error");
        }
        else{
            res.json(rows);
        }
    });
});
test.post('/checkin', (req, res) => {
    const { mood, productivity } = req.body;
    const prodScore = parseInt(productivity);
    db.addCheckIn(mood, prodScore, (err, lastID) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Failed to save check-in");
        } else {
            res.status(201).json({
                message: "Check-in saved successfully!",
                id: lastID
            });
        }
    });
});
 const PORT = 3000;
 test.listen(PORT , function(){
    console.log("Port is running on localhost: " + PORT);
 })