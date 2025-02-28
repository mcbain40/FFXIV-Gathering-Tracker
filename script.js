fetch('https://mcbain40.github.io/FFXIV-Gathering-Tracker/GatheringItem.json')
    .then(response => response.json())
    .then(data => {
        let tableBody = document.querySelector("#gatheringTable tbody");
        tableBody.innerHTML = ""; // Clear existing data

        data.forEach(item => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.Item}</td>
                <td>${item.Level}</td>
                <td>${item.Type}</td>
                <td>${item.Expansion}</td>
                <td>${item.Zone}</td>
                <td>${item["Closest Aetheryte"]}</td>
                <td>${item["Min. Stats"]}</td>
                <td>${item["Collectable Scrips"]}</td>
                <td>${item["Spawn Time"]}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error("Error loading data:", error));


