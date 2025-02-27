document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/mcbain40/FFXIV-Gathering-Tracker/main/GatheringItem.csv")
        .then(response => response.text())
        .then(data => {
            populateTable(data);
        })
        .catch(error => console.error("Error loading data:", error));

    function populateTable(csvData) {
        let rows = csvData.split("\n").map(row => row.split(","));
        let tableBody = document.querySelector("#gatheringTable tbody");

        rows.slice(1).forEach(row => {
            let tr = document.createElement("tr");

            row.forEach(cell => {
                let td = document.createElement("td");
                td.textContent = cell;
                tr.appendChild(td);
            });

            tableBody.appendChild(tr);
        });
    }

    function updateEorzeaTime() {
        let now = new Date();
        let eorzeaTime = new Date(now.getTime() * 144 / 6);
        let hours = eorzeaTime.getUTCHours().toString().padStart(2, '0');
        let minutes = eorzeaTime.getUTCMinutes().toString().padStart(2, '0');
        document.getElementById("clock").textContent = `Eorzea Time: ${hours}:${minutes}`;
    }

    setInterval(updateEorzeaTime, 1000);
    updateEorzeaTime();
});
