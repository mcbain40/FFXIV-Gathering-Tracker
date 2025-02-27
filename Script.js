document.addEventListener("DOMContentLoaded", function () {
    async function loadCSV() {
        const response = await fetch("https://raw.githubusercontent.com/mcbain40/FFXIV-Gathering-Tracker/main/GatheringItem.csv");
 // Make sure the file is in the same GitHub folder
        if (!response.ok) {
            console.error("Failed to load CSV");
            return;
        }
        const data = await response.text();
        populateTable(data);
    }

    function populateTable(csvData) {
        const rows = csvData.split("\n").slice(1); // Skip header row
        const tableBody = document.querySelector("#gatheringTable tbody");
        tableBody.innerHTML = ""; // Clear existing rows

        rows.forEach(row => {
            const columns = row.split(",");
            if (columns.length < 9) return; // Ignore incomplete rows

            const tr = document.createElement("tr");
            columns.forEach(text => {
                const td = document.createElement("td");
                td.textContent = text;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    }

    loadCSV();
});

