function xQuo() {
    // Create a floating window
    const floatingWindow = window.open('', 'xQuoWindow', 'width=1000,height=1600');
    // Define the HTML content directly in the JavaScript
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EZ Blinds & Shutters Quotation</title>
    <link rel="stylesheet" href="xQuoHtml.css">
</head>
<body>
    <div class="main-container">
        <div class="section header">
            <table class="header-table">
                <tr>
                    <td>
                        <h1>Quotation</h1>
                    </td>
                    <td>
                        <h2 style="text-align: right;">EZ Blinds & Shutters</h2>
                    </td>
                </tr>
                <tr>
                    <td>Ref: <span contenteditable="true" id="ref"></span></td>
                    <td style="text-align: right;">ABN: 52 62 74 20 777</td>
                </tr>
                <tr>
                    <td>Customer: <span contenteditable="true" id="customer"></span></td>
                    <td style="text-align: right;">Address: U11/ 271 Wells Rd, Chelsea Heights</td>
                </tr>
                <tr>
                    <td>Address: <span contenteditable="true" id="address"></span></td>
                    <td style="text-align: right;">Phone: 0466 965 168</td>
                </tr>
                <tr>
                    <td>Phone: <span contenteditable="true" id="phone"></span></td>
                    <td style="text-align: right;">Email: ezblinds＠ezbns.com.au</td>
                </tr>
                <tr>
                    <td>Email: <span contenteditable="true" id="email"></span></td>
                    <td style="text-align: right;">Web: www.ezbns.com.au</td>
                </tr>
                <tr>
                    <td>
                        Issue: <span contenteditable="true" class="date-input" id="issueDate"></span>
                        <span style="display: inline-block; width: 10px;"></span>
                        Due : <span contenteditable="true" class="date-input" id="dueDateDisplay"></span>
                    </td>
                    <td style="text-align: right;">NO: <span id="quoNo"></span></td>
                </tr>
            </table>
        </div>

        <div class="section middle-container">
            <div class="table-wrapper">
                <!-- Middle container content will be dynamically inserted here -->
            </div>
        </div>

        <div class="section middle-container2">
            <!-- Middle container 2 content remains unchanged -->
        </div>

        <div class="section bottom-section-container">
            <div class="total-summary">
                <table>
                    <tr>
                        <td></td>
                        <td>Delivery:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Installation:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>GST inclusive:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Deposit:</td>
                        <td contenteditable="true"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Balance:</td>
                        <td contenteditable="true"></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="section bottom-section-container2">
            <table class="payment-method">
                <tr>
                    <td colspan="2" style="background-color: #fffacd; font-weight: bold; text-align: center;">
                        Payment Method
                    </td>
                    <td style="border: none;"></td>
                </tr>
                <tr>
                    <td style="background-color: #f0f0f0; font-weight: bold; text-align: center;">1</td>
                    <td style="text-align: right;">
                        <table class="bank-details" style="border-collapse: collapse; width: 100%;">
                            <tr>
                                <td>Bank:</td>
                                <td style="text-align: left; padding-bottom: 3px;">CBA</td>
                            </tr>
                            <tr>
                                <td>BSB:</td>
                                <td style="text-align: left; padding-bottom: 3px;">062 692</td>
                            </tr>
                            <tr>
                                <td>Account:</td>
                                <td style="text-align: left; padding-bottom: 3px;">4570 8877</td>
                            </tr>
                            <tr>
                                <td>Acc Name:</td>
                                <td style="text-align: left;">Alphalead Pty Ltd</td>
                            </tr>
                        </table>
                    </td>
                    <td style="border: none;"></td>
                </tr>
                <tr>
                    <td style="background-color: #f0f0f0; font-weight: bold; text-align: center;">2</td>
                    <td style="font-weight: bold; text-align: center;">
                        PayID: 627 420 777
                    </td>
                    <td style="border: none;"></td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: left; color: blue; font-weight: bold;">
                        Please leave your Ph. number as Ref. in the transaction.
                    </td>
                    <td style="border: none;"></td>
                </tr>
            </table>
        </div>
    </div>
    <script src="xquoHtmlscript.js"></script>
</body>
</html>
 `;
    // Set the HTML content of the floating window
    floatingWindow.document.open();
    floatingWindow.document.write(htmlContent);
    floatingWindow.document.close();

    // 獲取 datatable 的樣式
    const getDatatableStyles = () => {
        const datatableElement = document.querySelector('#dataTable');
        if (!datatableElement) {
            console.error('Datatable not found');
            return '';
        }

        const computedStyle = window.getComputedStyle(datatableElement);
        const relevantProperties = [
            'width', 'border-collapse', 'border-spacing',
            'border', 'border-color', 'border-style', 'border-width',
            'font-family', 'font-size', 'color', 'background-color'
        ];

        const tableStyles = relevantProperties
            .map(prop => `${prop}: ${computedStyle.getPropertyValue(prop)};`)
            .join('\n');

        const cellStyles = `
        #dataTable th, #dataTable td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        #dataTable th {
            background-color: #f2f2f2;
        }
    `;

        return `
        #dataTable {
            ${tableStyles}
        }
        ${cellStyles}
    `;
    };

    // Function to copy the datatable and its styles, and perform additional tasks
    function processDataTable() {
        console.log('processDataTable started');

        // Get the table-wrapper element from the floating window
        const floatingTableWrapper = floatingWindow.document.querySelector('.table-wrapper');

        // Get the table-container element from the original page (index.html)
        const originalTableContainer = document.querySelector('.table-container');

        if (floatingTableWrapper && originalTableContainer) {
            // Clone the datatable element from the original page
            const clonedDatatable = originalTableContainer.querySelector('#dataTable').cloneNode(true);

            // 獲取 datatable 的樣式
            const styles = getDatatableStyles();

            // Create a style element and add it to the floating window
            const styleElement = floatingWindow.document.createElement('style');
            styleElement.textContent = styles;
            floatingWindow.document.head.appendChild(styleElement);

            // Add specific styles for the table
            const tableStyles = `
                #dataTable {
                    border-collapse: collapse;
                    width: 100%;
                    margin-bottom: auto; /* Ensures table stays at top */
                }
                #dataTable th, #dataTable td {
                    border: 1px solid black;
                    padding: 8px;
                    text-align: left;
                }
                #dataTable th {
                    background-color: #f2f2f2;
                }
            `;
            const tableStyleElement = floatingWindow.document.createElement('style');
            tableStyleElement.textContent = tableStyles;
            floatingWindow.document.head.appendChild(tableStyleElement);

            // Clear existing content
            floatingTableWrapper.innerHTML = '';
            // Append the cloned datatable to the floating window's table-wrapper
            floatingTableWrapper.appendChild(clonedDatatable);

            // Get the table in the floating window
            const table = floatingWindow.document.querySelector('#dataTable');

            // Call LoadCustomerDetail function
            LoadCustomerDetail();

            // Call AskpricingRate() function
            AskpricingRate(table);

            // 1. Change column names
            table.rows[0].cells[1].textContent = 'Name';
            table.rows[0].cells[2].textContent = 'Color';

            // 2. Process BO, BO2, and SN columns
            processColumn(table, 3, 'BO');
            processColumn(table, 4, 'BO2');
            processColumn(table, 5, 'SN');

            // 3. Modify table structure
            table.rows[0].cells[3].textContent = 'Location';
            table.rows[0].cells[3].style.width = '15px';
            for (let i = 1; i < table.rows.length; i++) {
                table.rows[i].cells[3].textContent = '';
            }

            // Remove columns: BO2, SN, NA, Discnt
            const columnsToRemove = [14, 13, 5, 4]; // Indices adjusted as we remove columns
            columnsToRemove.forEach(colIndex => {
                for (let i = 0; i < table.rows.length; i++) {
                    table.rows[i].deleteCell(colIndex);
                }
            });

            // 在此調用 addRBsum 函數
            addRBsum(table);
            // Call slimTable function
            slimTable(table);

            // Adjust container height based on content
            adjustContainerHeight();

            console.log('Datatable processed successfully');

        } else {
            console.error('Required elements not found. Retrying...');
            setTimeout(processDataTable, 500); // Retry after 500ms
        }
        setTimeout(() => {
            console.log('Calling createInfoTable...');
            createInfoTable(floatingWindow);
        }, 1000); // 延遲 1 秒，確保 processDataTable 已經完成
        console.log(floatingWindow.document.querySelector('.payment-method table'));
    }

    // New function to adjust container height
    function adjustContainerHeight() {
        const middleContainer = floatingWindow.document.querySelector('.middle-container');
        const tableWrapper = floatingWindow.document.querySelector('.table-wrapper');
        const table = floatingWindow.document.querySelector('#dataTable');

        if (middleContainer && tableWrapper && table) {
            // Get the table height including the extra rows from addRBsum
            const tableHeight = table.offsetHeight;
            // Convert cm to pixels (assuming 96 DPI)
            const cmToPx = (cm) => cm * 37.795275591;
            const minHeightPx = cmToPx(10);
            const paddingBottomPx = cmToPx(2);

            // Calculate required height (table height + bottom padding)
            const requiredHeight = tableHeight + paddingBottomPx;

            // Set container height
            if (requiredHeight > minHeightPx) {
                middleContainer.style.height = `${requiredHeight / 37.795275591}cm`;
            } else {
                middleContainer.style.height = '10cm';
            }
        }
    }

    function LoadCustomerDetail() {
        console.log("LoadCustomerDetail function called");

        // Find the customer detail table in the original window (index.html)
        const customerDetailTable = document.querySelector("#Customer-detail");
        if (!customerDetailTable) {
            console.error("Customer detail table not found in the original document");
            return;
        }
        console.log("Customer detail table found in the original document");

        // Find the header table in the floating window
        const headerTable = floatingWindow.document.querySelector(".header-table");
        if (!headerTable) {
            console.error("Header table not found in floating window");
            return;
        }
        console.log("Header table found in floating window");

        const getValueFromCustomerDetail = (id) => {
            const element = document.getElementById(id);
            return element ? element.value || element.textContent.trim() : "";
        };

        const updateHeaderTable = (id, value) => {
            const element = headerTable.querySelector(`#${id}`);
            if (element) {
                element.textContent = value;
                console.log(`Updated ${id} with value: ${value}`);
            } else {
                console.warn(`Element with id '${id}' not found in header table`);
            }
        };

        try {
            // Update customer details
            updateHeaderTable("customer", getValueFromCustomerDetail("customerName"));
            updateHeaderTable("address", getValueFromCustomerDetail("customerAddress"));
            updateHeaderTable("email", getValueFromCustomerDetail("customerEmail"));
            updateHeaderTable("quoNo", getValueFromCustomerDetail("customerNumber"));
            updateHeaderTable("phone", getValueFromCustomerDetail("customerPhone"));
            updateHeaderTable("issueDate", getValueFromCustomerDetail("issueDate"));
            updateHeaderTable("dueDateDisplay", getValueFromCustomerDetail("dueDateDisplay"));
        } catch (error) {
            console.error("Error updating header table:", error);
        }

        console.log("LoadCustomerDetail function completed");
    }

    function AskpricingRate(table) {
        let PricingRate;

        while (true) {
            const input = floatingWindow.prompt("Price multiplier rate: 1.5 ~ 1.8");

            if (input === null) {
                // User pressed cancel, stop the entire xquo.js process
                throw new Error("Process cancelled by user");
            }

            PricingRate = parseFloat(input);

            if (!isNaN(PricingRate) && PricingRate > 0 && PricingRate >= 1.5 && PricingRate <= 1.8) {
                break;
            } else {
                floatingWindow.alert("Please enter a valid number between 1.5 and 1.8");
            }
        }

        // Process the table
        for (let i = 1; i < table.rows.length; i++) {
            const cell14 = table.rows[i].cells[14];
            const cell15 = table.rows[i].cells[15];

            if (cell14 && cell15) {
                const value = parseFloat(cell14.textContent);
                if (!isNaN(value)) {
                    cell15.textContent = (value * PricingRate).toFixed(2);
                }
            }
        }
    }

    function createInfoTable(floatingWindow) {
        console.log('Executing createInfoTable');
        // 1. 從浮動視窗中取出 datatable 並計算 Sellprice（最後一列的最後一行單元格的值）
        const datatable = floatingWindow.document.querySelector(".section.middle-container table");
        if (!datatable) {
            console.error('Datatable not found');
            return;
        }

        // 2. 創建 infotable（3 列 8 行）
        const infotable = floatingWindow.document.createElement("table");
        infotable.style.borderCollapse = "collapse";
        infotable.style.width = "20cm";
        infotable.style.maxWidth = "100%";
        infotable.style.tableLayout = "fixed";
        infotable.style.overflowX = "auto";
        infotable.style.boxSizing = "border-box";
        infotable.classList.add('infotable');

        for (let i = 0; i < 3; i++) {
            const row = infotable.insertRow();
            for (let j = 0; j < 8; j++) {
                const cell = row.insertCell();
                cell.style.fontSize = "80%";
                cell.style.color = "black";
                cell.style.textAlign = "center";
                cell.style.border = "1px solid black";
                cell.style.overflow = "hidden";
                cell.style.whiteSpace = "nowrap";
            }
        }

        // 將 infotable 添加到浮動視窗的 middle-container2
        floatingWindow.document.querySelector(".section.middle-container2").appendChild(infotable);

        // 3. 設置 infotable 表頭名稱
        const headers = ["item", "D'bracket", "H-winder", "Motor", "Remote", "Charger", "Extra", "R'Blinds"];
        for (let j = 0; j < headers.length; j++) {
            infotable.rows[0].cells[j].innerText = headers[j];
        }
        infotable.rows[2].cells[0].innerText = "Total";

        // 4. 設定函數以更新 infotable 的值動態變動
        const updateSellPrice = () => {
            const lastRowIndex = datatable.rows.length - 1;
            const lastCellIndex = datatable.rows[0].cells.length - 1;

            // 更新 infotable.rows[1].cells[7]
            let sellprice = 0;
            if (lastRowIndex > 0) {
                sellprice = parseFloat(datatable.rows[lastRowIndex].cells[lastCellIndex].innerText.trim()) || 0;
            }
            infotable.rows[1].cells[7].innerText = sellprice;

            // 更新 infotable.rows[2].cells[7]
            let total = 0;
            for (let j = 1; j < 8; j++) {
                total += parseFloat(infotable.rows[1].cells[j].innerText) || 0;
            }
            infotable.rows[2].cells[7].innerText = total;
        };

        // 初次執行更新
        updateSellPrice();

        // 5. 監聽 datatable 的變動
        const observer = new MutationObserver(updateSellPrice);
        observer.observe(datatable, {
            childList: true,
            subtree: true,
            characterData: true,
        });

        // 6. 統計第一列非空白單元格數，並計算 HDWinder、DboKet、Emotor
        let HDWinder = 0, DboKet = 0, Emotor = 0;
        let nonEmptyCountColumn0 = 0;

        for (let i = 1; i < datatable.rows.length; i++) {
            if (datatable.rows[i].cells[0].innerText.trim() !== "") {
                nonEmptyCountColumn0++;
            }
        }

        for (let i = 1; i <= nonEmptyCountColumn0; i++) {
            if (datatable.rows[i].cells[8].innerText.trim() !== "") HDWinder++;
            if (datatable.rows[i].cells[9].innerText.trim() !== "") DboKet++;
            if (datatable.rows[i].cells[10].innerText.trim() !== "") Emotor++;
        }

        HDWinder *= 30;
        DboKet *= 20;
        Emotor *= 250;

        // 填入計算結果
        infotable.rows[1].cells[1].innerText = DboKet;
        infotable.rows[1].cells[2].innerText = HDWinder;
        infotable.rows[1].cells[3].innerText = Emotor;

        // 檢查 Emotor 是否為零
        if (Emotor > 0) {
            // 7. 跳出對話框詢問 Remote 數量並計算
            let remoteCount;
            do {
                remoteCount = parseInt(floatingWindow.prompt("How many remote needed?"), 10);
            } while (isNaN(remoteCount) || remoteCount <= 0);
            infotable.rows[1].cells[4].innerText = remoteCount * 100;

            // 8. 填入 50 到 Charger 列
            infotable.rows[1].cells[5].innerText = 50;
        }

        // 9. Extra item 設置
        infotable.rows[1].cells[6].innerText = '0';
        const extraItemCell = infotable.rows[1].cells[6];
        extraItemCell.contentEditable = true;
        extraItemCell.style.backgroundColor = '#f9f9f9';

        extraItemCell.addEventListener('input', function () {
            this.textContent = this.textContent.replace(/[^0-9.]/g, '');
            updateSellPrice();
        });

        extraItemCell.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.blur();
            }
        });

        // 確保總和更新
        updateSellPrice();

        // 10. 將 infotable 添加到浮動視窗的 middle-container2
        floatingWindow.document.querySelector(".section.middle-container2").appendChild(infotable);

        const bottomSectionContainer = floatingWindow.document.querySelector('.bottom-section-container');
        if (!bottomSectionContainer) {
            console.error('Bottom section container not found, creating it');
            const newBottomSectionContainer = floatingWindow.document.createElement('div');
            newBottomSectionContainer.classList.add('bottom-section-container');
            floatingWindow.document.body.appendChild(newBottomSectionContainer);
        }

        const totalSummary = bottomSectionContainer.querySelector('.total-summary');
        if (!totalSummary) {
            console.error('Total summary not found, creating it');
            const newTotalSummary = floatingWindow.document.createElement('div');
            newTotalSummary.classList.add('total-summary');
            const totalSummaryTable = floatingWindow.document.createElement('table');
            for (let i = 0; i < 6; i++) {
                const row = totalSummaryTable.insertRow();
                row.insertCell();
                row.insertCell();
            }
            newTotalSummary.appendChild(totalSummaryTable);
            bottomSectionContainer.appendChild(newTotalSummary);
        }

        console.log('Executing createInfoTable');

        // Add TotalSum functionality
        TotalSum(floatingWindow);
    }

    // Function to process a specific column
    function processColumn(table, colIndex, columnName) {
        for (let i = 1; i < table.rows.length; i++) {
            if (table.rows[i].cells[colIndex].querySelector('.round-button.active')) {
                const name = promptForInput(`Input the name and color of the ${columnName}, Do not leave it blank`, 'Name');
                const color = promptForInput(`Input the name and color of the ${columnName}, Do not leave it blank`, 'Color');

                if (name && color) {
                    for (let j = 1; j < table.rows.length; j++) {
                        if (table.rows[j].cells[colIndex].querySelector('.round-button.active')) {
                            table.rows[j].cells[1].textContent = name;
                            table.rows[j].cells[2].textContent = color;
                        }
                    }
                }
                break;
            }
        }
    }

    function promptForInput(message, field) {
        let input;
        do {
            input = floatingWindow.prompt(`${message}\n${field}:`);
        } while (input === '');
        return input;
    }

    setTimeout(processDataTable, 500);

    function TotalSum(floatingWindow) {
        const bottomSectionContainer = floatingWindow.document.querySelector('.bottom-section-container');
        if (!bottomSectionContainer) {
            console.error('Bottom section container not found');
            return;
        }

        const totalSummaryTable = bottomSectionContainer.querySelector('.total-summary table');
        if (!totalSummaryTable) {
            console.error('Total summary table not found');
            return;
        }

        const middleContainer2 = floatingWindow.document.querySelector('.section.middle-container2');
        const infoTable = middleContainer2.querySelector('.infotable');
        if (!infoTable) {
            console.error('Info table not found');
            return;
        }

        function getSellprice02() {
            const lastRow = infoTable.rows[infoTable.rows.length - 1];
            if (!lastRow) {
                console.error('Last row of info table not found');
                return 0;
            }
            return parseFloat(lastRow.cells[7].textContent) || 0;
        }

        function updateTotalSummary() {
            const sellprice02 = getSellprice02();
            const deliveryCell = totalSummaryTable.rows[0].cells[2];
            const installCell = totalSummaryTable.rows[1].cells[2];

            const delivery = parseFloat(deliveryCell.textContent) || 150;
            let RBitemNO = 0;
            const table = floatingWindow.document.querySelector('#dataTable');
            if (table) {
                RBitemNO = table.rows.length - 1;
            }
            const install = parseFloat(installCell.textContent) || RBitemNO * 15;

            let FinalTotal;
            if (deliveryCell.style.textDecoration === 'line-through' && installCell.style.textDecoration === 'line-through') {
                FinalTotal = sellprice02;
            } else if (deliveryCell.style.textDecoration === 'line-through') {
                FinalTotal = install + sellprice02;
            } else if (installCell.style.textDecoration === 'line-through') {
                FinalTotal = delivery + sellprice02;
            } else {
                FinalTotal = delivery + install + sellprice02;
            }

            const GST = FinalTotal * 0.1;
            const Deposit = Math.ceil((FinalTotal * 0.55) / 10) * 10;
            const Balance = FinalTotal - Deposit;

            deliveryCell.textContent = delivery.toFixed(2);
            installCell.textContent = install.toFixed(2);
            totalSummaryTable.rows[2].cells[2].textContent = FinalTotal.toFixed(2);
            totalSummaryTable.rows[3].cells[2].textContent = GST.toFixed(2);
            totalSummaryTable.rows[4].cells[2].textContent = Deposit.toFixed(2);
            totalSummaryTable.rows[5].cells[2].textContent = Balance.toFixed(2);
        }

        [0, 1].forEach(rowIndex => {
            const cell = totalSummaryTable.rows[rowIndex].cells[1];
            let isActive = false;
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', function () {
                isActive = !isActive;
                this.style.backgroundColor = isActive ? '#f0f0f0' : '';
                const valueCell = totalSummaryTable.rows[rowIndex].cells[2];
                if (isActive) {
                    valueCell.style.textDecoration = 'line-through';
                } else {
                    valueCell.style.textDecoration = 'none';
                }
                updateTotalSummary();
            });
        });

        for (let i = 0; i < totalSummaryTable.rows.length; i++) {
            const cell = totalSummaryTable.rows[i].cells[2];
            if (!cell) {
                console.error(`Cell not found in row ${i}`);
                continue;
            }
            cell.contentEditable = true;
            cell.addEventListener('input', function () {
                this.textContent = this.textContent.replace(/[^0-9.]/g, '');
                updateTotalSummary();
            });
            cell.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    const nextRow = this.parentElement.nextElementSibling;
                    if (nextRow) {
                        nextRow.cells[2].focus();
                    } else {
                        this.blur();
                    }
                }
            });
        }

        const gstRow = totalSummaryTable.rows[3];
        const gstLabelCell = gstRow.cells[1];
        const gstValueCell = gstRow.cells[2];
        let gstHidden = false;

        gstLabelCell.style.cursor = 'pointer';
        gstLabelCell.addEventListener('click', function () {
            if (gstHidden) {
                this.style.backgroundColor = '';
                this.textContent = 'GST inclusive:';
                gstValueCell.style.visibility = 'visible';
                gstValueCell.style.border = '1px solid black';
                gstHidden = false;
            } else {
                this.style.backgroundColor = '#f0f0f0';
                this.textContent = '';
                gstValueCell.style.visibility = 'hidden';
                gstValueCell.style.border = '2px solid black';
                gstHidden = true;
            }
            updateTotalSummary();
        });

        const observer = new MutationObserver(() => {
            updateTotalSummary();
        });

        observer.observe(infoTable, {
            subtree: true,
            childList: true,
            characterData: true
        });

        updateTotalSummary();
    }

    function slimTable(table) {
        for (let i = 0; i < table.rows.length; i++) {
            for (let j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].style.fontSize = '65%';
                table.rows[i].cells[j].style.color = 'black';
                table.rows[i].cells[j].style.textAlign = 'center';
            }
        }

        for (let j = 0; j < table.rows[0].cells.length; j++) {
            table.rows[0].cells[j].style.fontWeight = 'bold';
        }

        for (let i = 1; i < table.rows.length; i++) {
            const cell = table.rows[i].cells[3];
            cell.contentEditable = 'true';

            cell.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    const nextRowIndex = i + 1;
                    if (nextRowIndex < table.rows.length) {
                        const nextCell = table.rows[nextRowIndex].cells[3];
                        nextCell.focus();
                    }
                }
            });
        }
    }

    function addRBsum(table) {
        let RBsubTotal = 0;
        for (let i = 1; i < table.rows.length; i++) {
            const cellValue = parseFloat(table.rows[i].cells[table.rows[i].cells.length - 1].textContent) || 0;
            RBsubTotal += cellValue;
        }

        let RBitemNO = table.rows.length - 1;
        window.RBitemNO = RBitemNO;

        const createRow = () => {
            const row = table.insertRow();
            for (let i = 0; i < table.rows[0].cells.length; i++) {
                const cell = row.insertCell();
                cell.style.border = '1px solid black';
                cell.style.padding = '8px';
                cell.style.textAlign = 'left';
            }
            return row;
        };

        const secondLastRow = createRow();
        const lastRow = createRow();

        secondLastRow.cells[11].textContent = RBsubTotal;
        secondLastRow.cells[10].textContent = 'Sub total';
        lastRow.cells[9].textContent = 'Discount %';

        const discountCell = lastRow.cells[10];
        discountCell.contentEditable = "true";
        discountCell.style.backgroundColor = '#f9f9f9';

        let Discnt = parseFloat(discountCell.textContent) || 0;

        let RBdiscntTotal = RBsubTotal * ((100 - Discnt) / 100);
        lastRow.cells[11].textContent = RBdiscntTotal.toFixed(2);

        discountCell.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                discountCell.blur();
            }
        });

        discountCell.addEventListener('input', () => {
            let inputValue = discountCell.textContent.trim();

            if (/^\d+(\.\d+)?$/.test(inputValue)) {
                const parsedValue = parseFloat(inputValue);
                if (parsedValue >= 0 && parsedValue <= 30) {
                    Discnt = parsedValue;
                } else {
                    Discnt = 0;
                    discountCell.textContent = '0';
                }
            } else {
                Discnt = 0;
                discountCell.textContent = '0';
            }

            RBdiscntTotal = RBsubTotal * ((100 - Discnt) / 100);
            lastRow.cells[11].textContent = RBdiscntTotal.toFixed(2);

            adjustContainerHeight();
        });

        for (let i = 1; i < table.rows.length; i++) {
            const cell = table.rows[i].cells[11];
            const value = parseFloat(cell.textContent);
            if (!isNaN(value)) {
                cell.textContent = value.toFixed(2);
            }
        }

        adjustContainerHeight();
    }
}