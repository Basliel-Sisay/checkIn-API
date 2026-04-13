async function loadHistory() {
    try {
        const response = await fetch('/history');
        const checkins = await response.json();
        renderCheckins(checkins);
    } catch (err) {
        console.error("Failed to load history:", err);
        const container = document.getElementById("recipes");
        container.innerHTML = "<p style='color: rgb(220, 50, 50);'>Error connecting to server. Make sure your API is running.</p>";
    }
}
function renderCheckins(list) {
    const container = document.getElementById("recipes");

    if (list.length === 0) {
        container.innerHTML = "<p style='text-align: center; color: rgb(100, 116, 139);'>No check-ins found yet! Add some data via Postman.</p>";
        return;
    }
    container.innerHTML = list.map((entry, index) => `
        <div class="card">
            <div class="card-content">
                <div class="section-title">Daily Mood</div>
                <h2>${entry.mood}</h2>
                
                <div class="section-title">Productivity Score</div>
                <div style="font-size: 18px; margin-bottom: 10px;">${entry.productivity} / 10</div>
                
                <p class="timestamp">Logged on: ${entry.timestamp}</p>
                
                <button class="btn" onclick="toggleDetails(${index})">
                    Technical Details
                </button>

                <div id="details-${index}" class="hidden insights-box">
                    <p><strong>SQLite ID:</strong> ${entry.id}</p>
                    <p><strong>Source:</strong> checkIn-API (Node.js)</p>
                </div>
            </div>
        </div>
    `).join('');
}
function toggleDetails(index) {
    const el = document.getElementById(`details-${index}`);
    el.classList.toggle("hidden");
}
document.getElementById("search").addEventListener("input", async (e) => {
    const value = e.target.value.toLowerCase();
    try {
        const response = await fetch('/history');
        const data = await response.json();
        
        const filtered = data.filter(item => 
            item.mood.toLowerCase().includes(value)
        );
        
        renderCheckins(filtered);
    } catch (err) {
        console.error("Search error:", err);
    }
});
loadHistory();