document.addEventListener("DOMContentLoaded", function() {
    const tableContainer = document.getElementById("table-container");
    const searchBar = document.getElementById("search-bar");
    const errorMessage = document.getElementById("error-message");

    const table = document.createElement("table");
    table.classList.add("data-table");

    const thead = document.createElement("thead");
    const theadRow = document.createElement("tr");

    const headers = [
        "Deal Size", 
        "Deal Category", 
        "Deal Employee", 
        "Deal Location", 
        "Pipeline", 
        "Stage", 
        "Last Updated",
        "", 
        "  ", 
        " "  
    ];

    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        theadRow.appendChild(th);
    });
    thead.appendChild(theadRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    const data = [];

    for (let i = 0; i < 20; i++) {
        const tr = document.createElement("tr");
        const dealSize = i + 1;

        headers.forEach(header => {
            const td = document.createElement("td");
            switch (header) {
                case "Deal Size":
                    td.textContent = `Size ${dealSize}`;
                    break;
                case "Deal Category":
                    td.textContent = `Category ${i + 1}`;
                    break;
                case "Deal Employee":
                    td.textContent = `Employee ${i + 1}`;
                    break;
                case "Deal Location":
                    td.textContent = `Location ${i + 1}`;
                    break;
                case "Pipeline":
                    td.textContent = `Pipeline ${i + 1}`;
                    break;
                case "Stage":
                    td.textContent = `Stage ${i + 1}`;
                    break;
                case "Last Updated":
                    td.textContent = `2024-07-${i + 1}`;
                    break;
                case "":
                    td.textContent = "💾";
                    break;
                case "  ":
                    td.textContent = "📝";
                    break;
                case " ":
                    td.textContent = "❌";
                    break;
                default:
                    td.textContent = "";
                    break;
            }
            tr.appendChild(td);
        });

        if (dealSize % 2 !== 0) {
            tr.style.backgroundColor = "#e5e1e1";
        } else {
            tr.style.backgroundColor = "white";
        }

        data.push({
            dealSize: `Size ${dealSize}`,
            dealCategory: `Category ${i + 1}`,
            dealEmployee: `Employee ${i + 1}`,
            dealLocation: `Location ${i + 1}`,
            pipeline: `Pipeline ${i + 1}`,
            stage: `Stage ${i + 1}`,
            lastUpdated: `2024-07-${i + 1}`,
            element: tr
        });

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);

    searchBar.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const query = searchBar.value.toLowerCase();
            let found = false;

            tbody.innerHTML = "";

            data.forEach(item => {
                if (
                    item.dealSize.toLowerCase().includes(query) ||
                    item.dealCategory.toLowerCase().includes(query) ||
                    item.dealEmployee.toLowerCase().includes(query) ||
                    item.dealLocation.toLowerCase().includes(query) ||
                    item.pipeline.toLowerCase().includes(query) ||
                    item.stage.toLowerCase().includes(query) ||
                    item.lastUpdated.toLowerCase().includes(query)
                ) {
                    tbody.appendChild(item.element);
                    found = true;
                }
            });

            if (!found) {
                errorMessage.textContent = "No matches found";
            } else {
                errorMessage.textContent = "";
            }
        }
    });
});
