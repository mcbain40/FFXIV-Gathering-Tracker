document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/mcbain40/FFXIV-Gathering-Tracker/main/GatheringItem.csv")
        .then(response => response.text())
        .then(data => processCSV(data))
        .catch(error => console.error("Error loading CSV:", error));
});

function processCSV(data) {
    let rows = data.split("\n").map(row => row.split(","));
    let tableBody = document.querySelector("#gatheringTable tbody");
    tableBody.innerHTML = ""; // Clear existing data

    // Skip the first row (header)
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        if (row.length < 9) continue; // Skip incomplete rows

        let newRow = document.createElement("tr");
        row.forEach(cell => {
            let td = document.createElement("td");
            td.textContent = cell.trim();
            newRow.appendChild(td);
        });

        tableBody.appendChild(newRow);
    }
}

