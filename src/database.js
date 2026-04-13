const { Database } = require('sqlite3');
const path = require('path');

const sqlite3 = require('sqlite3').verbose();
const global = path.join(__dirname, '../data/test.sqlite');
const database = new Database(global);
database.serialize(()=>{
    database.run(`
        CREATE TABLE IF NOT EXISTS checkin(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mood TEXT,
        productivity INTEGER,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        `)
});

function addCheckIn(mood , productivity, callback){
 const insert = "INSERT INTO checkin (mood, productivity) VALUES (?,?)";
 database.run(insert, [mood, productivity], function(err) {
        callback(err, this.lastID); 
    });
};
function getHistory(callback){
    const sql = `SELECT * FROM checkin`;
    database.all(sql, [], (err, rows) => {
        callback(err, rows);
    });
};
module.exports = { addCheckIn, getHistory };