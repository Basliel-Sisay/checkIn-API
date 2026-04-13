# CheckIn-API 

A full stack personal tracking application built with **Node.js**, **Express**, and **SQLite**. This project allows users to log daily moods and productivity scores via an API and visualize them through a clean, modern web dashboard

<h2>Features</h2>

- Full-Stack Integration: Connects a vanilla JS frontend to a Node.js backend

- Persistent Storage: Data is stored locally in a SQLite database

- Search Filtering: Filter logs by mood in real time on the dashboard

- Technical Insights: Toggleable views to see underlying database IDs

<h2>Project Structure</h2>

<pre>
checkIn-API/
├── data/
│   └── test.sqlite          # SQLite database storage
├── public/
│   ├── index.html           # Dashboard UI
│   ├── style.css            # Custom RGB-based styling
│   └── script.js            # Frontend logic & API fetching
├── src/
│   ├── database.js          # SQLite connection & schema
│   └── server.js            # Express API routes & middleware
├── .gitignore               # Files to exclude from Git (node_modules, etc)
├── LICENSE                  # Project license
├── package.json             # Project dependencies
└── README.md                # Project documentation
</pre>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>

Node.js installed on your machine

<h3>Installation</h3>

<pre>
clone this repo https://github.com/Basliel-Sisay/checkIn-API
Navigate to the project directory: cd checkIn-API
Install dependencies: npm install
</pre>

<h3>Running the Server</h3>

<pre>node src/server.js</pre>

The server will start on http://localhost:3000

<h3>4. Viewing the Dashboard</h3>

Open your browser and navigate to:

http://localhost:3000

<h2>API Endpoints</h2>

 <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>GET</td>
        <td>/history</td>
        <td>Returns all check-in logs as JSON</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>/checkin</td>
        <td>Saves a new mood and productivity score</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td>/checkin/:id</td>
        <td>Removes a specific log by ID</td>
      </tr>
    </tbody>
  </table>

<h2>Example POST Request (PowerShell)</h2>

<pre>
  Invoke-RestMethod -Uri http://localhost:3000/checkin `
  -Method Post `
  -Body '{"mood": "Productive", "productivity": 9}' `
  -ContentType "application/json"
</pre>

<h2>Output</h2>

<h3>From Terminal</h3>

![](https://i.ibb.co/dJ2tR75c/Screenshot-2026-04-13-185549.png)

<h3>From The Browser</h3>

![](https://i.ibb.co/Q34PzWGT/Screenshot-2026-04-13-185609.png)

![](https://i.ibb.co/7Jv2vWdV/Screenshot-2026-04-13-185626.png)

![](https://i.ibb.co/rK9PRfFz/Screenshot-2026-04-13-185643.png)

![](https://i.ibb.co/YBRBntY0/Screenshot-2026-04-13-185702.png)

<h2>License</h2>

This project is licensed under the LICENSE file
