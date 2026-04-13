const express = require('express');
const db = require('./database');
 const test = express();
 test.use(express.json());
 test.use(express.static('public'));
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
     if(Number.isNaN(prodScore) || prodScore <=0 || prodScore > 10){
        return res.status(400).send("Invalid data");
    }
    db.addCheckIn(mood, prodScore, (err, lastID) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Failed to save check-in");
        }
         
        else {
            res.status(201).json({
                message: "Check-in saved successfully!",
                id: lastID
            });
        }
    });
});

test.delete('/checkin/:id', (req, res)=>{
    const checkInId = parseInt(req.params.id);
  db.database.run("DELETE FROM checkin WHERE id = ?", [checkInId], function(err) {
    if (err) {
      console.error("Error deleting checkin:", err.message);
    } else {
      if (this.changes > 0) {
        console.log('checkin with ID ' + checkInId +' deleted successfully');
        res.status(200).json({ message: 'checkin with ID '+ checkInId +' deleted successfully' });
      } else {
        console.log('No checkin found with ID ' + checkInId);
        res.status(404).json({ error: 'No checkin found with ID '+ checkInId + ' deleted successfully' });
      }
    }
  });
});
 const PORT = 3000;
 test.listen(PORT , function(){
    console.log("Port is running on localhost: " + PORT);
 })