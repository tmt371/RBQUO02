document.addEventListener("DOMContentLoaded", () => {
  function formatDate(date) {
    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear()
    return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`
  }

  var issueDateSpan = document.getElementById("issueDate")
  var dueDateSpan = document.getElementById("dueDateDisplay")

  var currentDate = new Date()
  issueDateSpan.textContent = formatDate(currentDate)

  var dueDate = new Date(currentDate)
  dueDate.setDate(dueDate.getDate() + 14)
  dueDateSpan.textContent = formatDate(dueDate)

  issueDateSpan.addEventListener("input", () => {
    var parts = issueDateSpan.textContent.split("/")
    if (parts.length === 3) {
      var day = Number.parseInt(parts[0], 10)
      var month = Number.parseInt(parts[1], 10) - 1
      var year = Number.parseInt(parts[2], 10)
      var newIssueDate = new Date(year, month, day)
      if (!isNaN(newIssueDate)) {
        var newDueDate = new Date(newIssueDate)
        newDueDate.setDate(newDueDate.getDate() + 14)
        dueDateSpan.textContent = formatDate(newDueDate)
      }
    }
  })

  const fields = ["ref", "customer", "address", "phone", "email"]
  fields.forEach((field, index) => {
    const element = document.getElementById(field)
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault()
        if (index < fields.length - 1) {
          document.getElementById(fields[index + 1]).focus()
        }
      }
    })
  })

  function generateQuoNo() {
    var now = new Date()
    var year = now.getFullYear()
    var month = String(now.getMonth() + 1).padStart(2, "0")
    var day = String(now.getDate()).padStart(2, "0")
    var hours = String(now.getHours()).padStart(2, "0")
    return year + month + day + hours
  }

  window.QuoNo = generateQuoNo()

  document.getElementById("quoNo").textContent = window.QuoNo

  function setupClickableTitle() {
    const titleElement = document.querySelector(".header h1")
    const titles = ["Quotation", "Invoice", "Receipt"]
    let currentTitleIndex = 0

    titleElement.addEventListener("click", () => {
      currentTitleIndex = (currentTitleIndex + 1) % titles.length
      titleElement.textContent = titles[currentTitleIndex]
    })
  }

  setupClickableTitle()
})

