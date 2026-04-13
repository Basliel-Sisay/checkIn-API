# checkIn-API

A lightweight Node.js and SQLite3 backend for tracking daily mood and productivity

<h2>Overview</h2>

CheckIn-API is a RESTful backend service built as part of a 30-day coding challenge. It allows users to log their daily status, including mood and productivity levels, storing them securely in a local SQLite database. The project demonstrates a clear separation of concerns between server logic and database management.

<h2>Project Structure</h2>

<pre>
checkIn-API/
├── data/
│ └── test.sqlite       # SQLite database file (auto-generated)
├── src/
│ ├── database.js       # Database schema and worker functions
│ └── server.js         # Express server and API routes
├── node_modules/       # Project dependencies
├── .gitignore          # Files to exclude from version control
├── package.json        # Project metadata and scripts
└── package-lock.json   # Dependency lock file
</pre>

<h2>Features</h2>

- Persistent Storage: Uses SQLite3 to save data locally
  
- RESTful Endpoints:
  
   - GET / : Welcome message.

   - GET /history : Retrieve all past check-ins.

   - POST /checkin : Log a new mood and productivity score.

- Automatic Timestamps: Database handles record creation times automatically

<h2>Getting Started</h2>

<h3>Prerequisites</h3>

Node.js installed on your machine.

<h3>Installation</h3>

<pre>
clone this repo https://github.com/Basliel-Sisay/checkIn-API
Navigate to the project directory: cd checkIn-API
Install dependencies: npm install
</pre>

<h3>Running the Server</h3>

<pre>node src/server.js</pre>

<h2>API Usage Examples</h2>

Log a New Check-In (PowerShell)

<pre>Invoke-RestMethod -Uri "http://localhost:3000/checkin" -Method Post -Body '{"mood": "Ecstatic", "productivity": 10}' -ContentType "application/json"</pre>

<h2>Output</h2>

![](https://i.ibb.co/9khY0sd5/Screenshot-2026-04-13-130747.png)

![](https://i.ibb.co/fY0wN1Y9/Screenshot-2026-04-13-130812.png)
  
<h3>View History</h3>

Simply navigate to http://localhost:3000/history in any web browser.

<h2>Future Roadmap</h2>

- Add data validation (ensure productivity is between 1-10).
  
- Implement a DELETE route for removing entries.
  
- Build a frontend interface (HTML/CSS) to visualize the data.
