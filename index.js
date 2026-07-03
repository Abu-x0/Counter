// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count //better than innerText
}

function save() {
    let countHistory = count + " - "
    saveEl.textContent += countHistory
    count=0
    countEl.textContent = count
}