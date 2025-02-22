function SaveQuoSheet() {
  const floatingWindow = window.open("", "xQuoWindow")

  if (!floatingWindow) {
    alert("The floating window is not open. Please run xQuo first.")
    return
  }

  const clonedDoc = floatingWindow.document.cloneNode(true)

  // Remove all script tags
  const scripts = clonedDoc.getElementsByTagName("script")
  while (scripts[0]) {
    scripts[0].parentNode.removeChild(scripts[0])
  }

  // Adjust the Discnt column
  const dataTable = clonedDoc.querySelector(".datatable")
  if (dataTable) {
    const rows = dataTable.rows
    for (let i = 0; i < rows.length; i++) {
      const discntCell = rows[i].cells[11] // Discnt is the 12th column (index 11)
      if (discntCell && i > 0) {
        // Skip the header row
        const value = Number.parseFloat(discntCell.textContent)
        if (!isNaN(value)) {
          discntCell.textContent = value.toFixed(2)
        }
      }
    }
  }

  // Remove all event listeners and contenteditable attributes
  const allElements = clonedDoc.getElementsByTagName("*")
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].removeAttribute("onclick")
    allElements[i].removeAttribute("onkeydown")
    allElements[i].removeAttribute("contenteditable")
    allElements[i].style.cursor = "default"
  }

  // Adjust the main container
  const mainContainer = clonedDoc.querySelector(".main-container")
  if (mainContainer) {
    mainContainer.style.width = "20.6cm"
    mainContainer.style.margin = "0 auto"
    mainContainer.style.border = "1px solid lightblue"
    mainContainer.style.padding = "0.3cm"
    mainContainer.style.boxSizing = "border-box"
  }

  // Adjust the header
  const header = clonedDoc.querySelector(".header")
  if (header) {
    header.style.width = "20cm"
    header.style.height = "380px"
    header.style.backgroundColor = "#E6F3FF"
    header.style.padding = "1px"
  }

  // Adjust the header table
  const headerTable = clonedDoc.querySelector(".header-table")
  if (headerTable) {
    headerTable.style.width = "100%"
    headerTable.style.height = "100%"
    headerTable.style.borderCollapse = "collapse"
    headerTable.style.tableLayout = "fixed"

    const headerRows = headerTable.rows
    for (let i = 0; i < headerRows.length; i++) {
      const cells = headerRows[i].cells
      for (let j = 0; j < cells.length; j++) {
        cells[j].style.verticalAlign = "top"
        cells[j].style.padding = "5px"
      }
    }

    if (headerRows[0]) {
      headerRows[0].style.height = "1.5cm"
    }

    for (let i = 1; i < headerRows.length; i++) {
      headerRows[i].style.height = "calc((100% - 1.5cm) / 7)"
    }
  }

  // Adjust the middle containers
  const middleContainer = clonedDoc.querySelector(".middle-container")
  if (middleContainer) {
    middleContainer.style.width = "20cm"
    middleContainer.style.minHeight = "25cm"
    middleContainer.style.height = "auto"
    middleContainer.style.border = "1px solid black"
    middleContainer.style.margin = "20px auto"
  }

  const middleContainer2 = clonedDoc.querySelector(".middle-container2")
  if (middleContainer2) {
    middleContainer2.style.width = "20cm"
    middleContainer2.style.display = "flex"
    middleContainer2.style.border = "1px solid black"
    middleContainer2.style.margin = "10px auto 25px auto"
  }

  // Adjust the bottom section containers
  const bottomSectionContainer = clonedDoc.querySelector(".bottom-section-container")
  if (bottomSectionContainer) {
    bottomSectionContainer.style.width = "20cm"
    bottomSectionContainer.style.maxWidth = "100%"
    bottomSectionContainer.style.display = "flex"
    bottomSectionContainer.style.justifyContent = "flex-end"
    bottomSectionContainer.style.marginBottom = "10px"
  }

  const bottomSectionContainer2 = clonedDoc.querySelector(".bottom-section-container2")
  if (bottomSectionContainer2) {
    bottomSectionContainer2.style.width = "20cm"
    bottomSectionContainer2.style.maxWidth = "100%"
    bottomSectionContainer2.style.display = "flex"
    bottomSectionContainer2.style.justifyContent = "flex-start"
    bottomSectionContainer2.style.marginTop = "10px"
    bottomSectionContainer2.style.marginBottom = "10px"
  }

  // Adjust the total summary table
  const totalSummaryTable = clonedDoc.querySelector(".total-summary table")
  if (totalSummaryTable) {
    totalSummaryTable.style.width = "100%"
    totalSummaryTable.style.height = "100%"
    totalSummaryTable.style.borderCollapse = "collapse"

    const rows = totalSummaryTable.rows
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].cells
      for (let j = 0; j < cells.length; j++) {
        cells[j].style.padding = "5px"
        if (j === 0) {
          cells[j].style.width = "12cm"
          cells[j].style.borderTop = "none"
          cells[j].style.borderLeft = "none"
          cells[j].style.borderBottom = "none"
        } else if (j === 1) {
          cells[j].style.width = "5cm"
          cells[j].style.border = "1px solid black"
          cells[j].style.textAlign = "left"
        } else if (j === 2) {
          cells[j].style.width = "3cm"
          cells[j].style.border = "1px solid black"
        }
      }
    }
  }

  // Adjust the payment method table
  const paymentMethodTable = clonedDoc.querySelector(".payment-method")
  if (paymentMethodTable) {
    paymentMethodTable.style.width = "20cm"
    paymentMethodTable.style.height = "7cm"
    paymentMethodTable.style.borderCollapse = "separate"
    paymentMethodTable.style.borderspacing = "0"
    const rows = paymentMethodTable.rows
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].cells
      for (let j = 0; j < cells.length; j++) {
        cells[j].style.border = "1px solid black"
        cells[j].style.padding = "5px"

        if (j === 0) {
          cells[j].style.width = "1cm"
        } else if (j === 1) {
          cells[j].style.width = "8cm"
          cells[j].style.border = "none"
        } else if (j === 2) {
          cells[j].style.width = "11cm"
          cells[j].style.borderTop = "none"
          cells[j].style.borderRight = "none"
          cells[j].style.borderBottom = "none"
        }
      }
    }

    // Specific styles for certain cells
    if (rows[0] && rows[0].cells[0]) {
      rows[0].cells[0].style.backgroundColor = "#fffacd"
      rows[0].cells[0].style.fontWeight = "bold"
      rows[0].cells[0].style.textAlign = "center"
    }
    if (rows[1] && rows[1].cells[0]) {
      rows[1].cells[0].style.backgroundColor = "#f0f0f0"
      rows[1].cells[0].style.fontWeight = "bold"
      rows[1].cells[0].style.textAlign = "center"
    }
    if (rows[2] && rows[2].cells[0]) {
      rows[2].cells[0].style.backgroundColor = "#f0f0f0"
      rows[2].cells[0].style.fontWeight = "bold"
      rows[2].cells[0].style.textAlign = "center"
    }
    if (rows[2] && rows[2].cells[1]) {
      rows[2].cells[1].style.fontWeight = "bold"
      rows[2].cells[1].style.textAlign = "center"
    }
    if (rows[3] && rows[3].cells[0]) {
      rows[3].cells[0].style.textAlign = "left"
      rows[3].cells[0].style.color = "blue"
      rows[3].cells[0].style.fontWeight = "bold"
    }
  }

  // Adjust bank details table
  const bankDetailsTable = clonedDoc.querySelector(".bank-details")
  if (bankDetailsTable) {
    bankDetailsTable.style.borderCollapse = "collapse"
    bankDetailsTable.style.width = "100%"

    const rows = bankDetailsTable.rows
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].cells
      if (cells[0]) {
        cells[0].style.width = "3.5cm"
        cells[0].style.textAlign = "right"
      }
    }
  }

  // Make the page responsive
  const responsiveStyles = `
    @media screen and (max-width: 768px) {
      .main-container {
        width: 100% !important;
        padding: 0.1cm !important;
      }
      .header, .middle-container, .middle-container2, .bottom-section-container, .bottom-section-container2 {
        width: 100% !important;
      }
      .header-table, .total-summary table, .payment-method {
        font-size: 14px !important;
      }
      #dataTable {
        font-size: 12px !important;
      }
    }
  `
  const styleElement = clonedDoc.createElement("style")
  styleElement.textContent = responsiveStyles
  clonedDoc.head.appendChild(styleElement)

  const content = clonedDoc.documentElement.outerHTML

  // Create a Blob with the HTML content
  const blob = new Blob([content], { type: "text/html" })

  // Get the quoNo and customer from the header
  const quoNo = clonedDoc.querySelector("#quoNo").textContent || ""
  const customer = clonedDoc.querySelector("#customer").textContent || ""
  const customerPh = clonedDoc.querySelector("#phone").textContent || ""
  // Create the filename
  const filename = `RB${quoNo} ${customer} ${customerPh}.html`

  // Create a download link
  const downloadLink = document.createElement("a")
  downloadLink.href = URL.createObjectURL(blob)
  downloadLink.download = filename

  // Append the link to the body
  document.body.appendChild(downloadLink)

  // Programmatically click the link to trigger the download
  downloadLink.click()

  // Remove the link from the document
  document.body.removeChild(downloadLink)
}

// Add event listener to the Save Qo button
document.addEventListener("DOMContentLoaded", () => {
  const saveQuoButton = document.getElementById("saveQuoButton")
  if (saveQuoButton) {
    saveQuoButton.addEventListener("click", SaveQuoSheet)
  }
})

