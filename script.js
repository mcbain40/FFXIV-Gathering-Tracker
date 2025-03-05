document.addEventListener("DOMContentLoaded", function () {
    fetch("http://127.0.0.1:5000/data")
        .then(response => response.json())
        .then(data => {
            populateTable(data);
        })
        .catch(error => console.error("Error loading data:", error));
});

function populateTable(data) {
    const tableBody = document.querySelector("#gatheringTable tbody");
    tableBody.innerHTML = ""; // Clear existing data

    data.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.Item || "N/A"}</td>
            <td>${item.Level || "N/A"}</td>
            <td>${item.Type || "N/A"}</td>
            <td>${item.Expansion || "N/A"}</td>
            <td>${item.Zone || "N/A"}</td>
            <td>${item["Closest Aetheryte"] || "N/A"}</td>
            <td>${item["Min. Stats"] || "N/A"}</td>
            <td>${item["Collectable Scrips"] || "N/A"}</td>
            <td>${item["Spawn Time"] || "N/A"}</td>
        `;

        tableBody.appendChild(row);
    });
}



