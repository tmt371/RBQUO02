function loadCSV() {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".csv";
  fileInput.style.display = "none";

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      processCSV(fileInput.files[0]);
    }
  });

  document.body.appendChild(fileInput);
  fileInput.click();
  document.body.removeChild(fileInput);
}

function processCSV(file) {
  const reader = new FileReader();

  reader.onload = (event) => {
    const csvData = event.target.result;
    const rows = csvData.split("\n").map((row) => row.split(","));

    // Process customer details first
    processCustomerDetails(rows);

    // Then process the main table data
    processMainTableData(rows);
  };

  reader.readAsText(file);
}

function processCustomerDetails(rows) {
  const customerDetails = {
    customerName: rows.find(row => row[0] === "Name")?.[1],
    customerPhone: rows.find(row => row[0] === "Ph")?.[1],
    customerAddress: rows.find(row => row[0] === "Add")?.[1],
    issueDate: rows.find(row => row[0] === "Issue")?.[1],
    customerEmail: rows.find(row => row[0] === "Email")?.[1],
    dueDateDisplay: rows.find(row => row[0] === "Due")?.[1],
    customerNumber: rows.find(row => row[0] === "No.")?.[1]
  };

  // Update Customer-detail-table
  Object.entries(customerDetails).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      // Remove surrounding quotes and unescape double quotes
      const cleanedValue = value ? value.replace(/^"(.*)"$/, '$1').replace(/""/g, '"') : '';
      if (element.tagName === 'INPUT') {
        element.value = cleanedValue;
      } else {
        element.textContent = cleanedValue;
      }
    }
  });
}

function processMainTableData(rows) {
  // Find the index of the header row for the main table data
  const headerIndex = rows.findIndex(row => row[0] === "Index");
  if (headerIndex === -1) {
    console.error("Main table header not found in CSV");
    return;
  }

  // Extract main table data
  const mainTableData = rows.slice(headerIndex + 1);

  const tbody = window.dataTable.table.querySelector("tbody");
  tbody.innerHTML = ""; // Clear existing rows

  console.log(`🔍 CSV 讀取完成，共 ${mainTableData.length} 筆資料`);

  mainTableData.forEach((rowData, index) => {
    const wValue = rowData[1]?.trim();
    const hValue = rowData[2]?.trim();

    console.log(`ℹ️ 正在處理第 ${index + 1} 行：W=${wValue}, H=${hValue}`);

    // Ensure datatable has enough rows
    while (tbody.rows.length <= index) {
      window.dataTable.addNewRow(tbody);
    }

    const row = tbody.rows[index];

    // Update W and H cells
    row.cells[1].textContent = wValue;
    row.cells[2].textContent = hValue;

    // Trigger cell update for H cell
    window.dataTable.setActiveCell(row.cells[2]);
    const enterEvent = new KeyboardEvent("keydown", { key: "Enter", bubbles: true });
    row.cells[2].dispatchEvent(enterEvent);
  });

  console.log("✅ CSV 資料已全部導入完畢！");

  // Process special cell clicks
  processSpecialCellClicks(mainTableData);
}

function processSpecialCellClicks(rows) {
  rows.forEach((row, i) => {
    const tableRow = window.dataTable.table.rows[i + 1]; // +1 to skip header row

    if (!tableRow) return;

    // A, B, C: Handle BO, BO2, SN columns
    for (let j = 3; j <= 5; j++) {
      if (row[j] === "1") {
        const button = tableRow.cells[j].querySelector(".round-button");
        if (button) button.click();
      }
    }

    // D: Handle OVER column
    if (row[6] === "O") {
      tableRow.cells[6].click();
    }

    // E: Handle I/O column
    const IOcell = tableRow.cells[7];
    if (row[7] === "OUT" && IOcell.textContent.trim() === "IN") {
      IOcell.click();
    }

    // F: Handle L/R column
    const cell = tableRow.cells[8];
    if (row[8] === "L" && cell.textContent.trim() === "R") {
      cell.click();
    }

    // G: Handle CHAIN column
    if (row[9]) {
      tableRow.cells[9].click();
      tableRow.cells[9].textContent = row[9];
    }

    // H: Handle BDRIVE, DBKET, MOTOR columns
    for (let j = 10; j <= 12; j++) {
      if (row[j] === "1") {
        tableRow.cells[j].click();
      }
    }
  });

  // Call finishAndSubmit function after processing all rows
  if (typeof window.finishAndSubmit === "function" && window.dataTable) {
    console.log("Calling finishAndSubmit function");
    window.finishAndSubmit(window.dataTable);
  } else {
    console.error("finishAndSubmit function or dataTable is not available");
  }
}