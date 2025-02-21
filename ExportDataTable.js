function ExportDataTable() {
    let csvContent = "data:text/csv;charset=utf-8,";

    // Step 1: Add customer details from Customer-detail-table
    csvContent += addCustomerDetails();

    // Step 2: Add a blank line for separation
    csvContent += "\n";

    // Step 3: Add main table data
    csvContent += addMainTableData();

    // Generate filename with new format
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hour = String(currentDate.getHours()).padStart(2, "0");
    const minute = String(currentDate.getMinutes()).padStart(2, "0");
    const dateTimeString = `${year}${month}${day}${hour}`;

    const customerName = getCustomerDetail("customerName").trim();
    const customerPhone = getCustomerDetail("customerPhone").trim();

    const defaultFileName = `RB${dateTimeString} ${customerName} ${customerPhone}.csv`;

    // Prompt user for filename
    const fileName = prompt("Enter a name for the file:", defaultFileName);

    if (fileName) {
        // Create and trigger download
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Export cancelled.");
    }
}

function addCustomerDetails() {
    let content = "";
    const details = [
        ["Name", getCustomerDetail("customerName")],
        ["Ph", getCustomerDetail("customerPhone")],
        ["Add", getCustomerDetail("customerAddress")],
        ["Issue", getCustomerDetail("issueDate")],
        ["Email", getCustomerDetail("customerEmail")],
        ["Due", getCustomerDetail("dueDateDisplay")],
        ["No.", getCustomerDetail("customerNumber")]
    ];

    details.forEach(detail => {
        content += `${detail[0]},"${escapeCSV(detail[1])}"\n`;
    });

    return content;
}

function addMainTableData() {
    const table = document.getElementById("dataTable");
    const rows = table.querySelectorAll("tbody tr");
    let content = "";

    // Add header row
    content += "Index,W,H,BO,BO2,SN,OVER,I/O,L/R,CHAIN,BDRIVE,DBKET,MOTOR,QTY,PRICE,REMARK\n";

    // Process each row
    rows.forEach((row, index) => {
        const rowData = [];
        row.querySelectorAll("td").forEach((cell, cellIndex) => {
            if (cellIndex === 0) {
                // Index column
                rowData.push(index + 1);
            } else if (cellIndex >= 3 && cellIndex <= 5) {
                // BO, BO2, SN columns
                const button = cell.querySelector(".round-button");
                rowData.push(button && button.classList.contains("active") ? "1" : "0");
            } else if (cellIndex >= 10 && cellIndex <= 12) {
                // BDRIVE, DBKET, MOTOR columns
                rowData.push(cell.textContent === "Yes" ? "1" : "0");
            } else {
                // Other columns
                rowData.push(cell.textContent.trim());
            }
        });
        content += rowData.join(",") + "\n";
    });

    return content;
}

// Helper function to get customer details
function getCustomerDetail(id) {
    const element = document.getElementById(id);
    return element ? element.value || element.textContent.trim() : "";
}

// Helper function to escape special characters for CSV
function escapeCSV(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/"/g, '""');
}

// Add event listener to the Export button
document.addEventListener('DOMContentLoaded', function () {
    const exportButton = document.getElementById('ExportDataTable');
    if (exportButton) {
        exportButton.addEventListener('click', ExportDataTable);
    }
});