// adaugarea elementelor noi se poate face atat la apasarea tastei enter cat si la apasarea butonului "Add item"

// in coloana item description va fi afisat textul introdus de utilizator in lista, iar pe coloana action va fi afisat un buton "Mark as buyed"

// butonul 'Mark as buyed" va adauga o clasa de css randului din tabel, ce va face textul sa apara taiat: "strikethrough"

// deasupra listei ce afiseaza elementele adaugate de utilizator, adaugati 2 butoane ce vor sorta crescator si descrescator elementele listei

let addItem = document.querySelector('.add-item');
let input = document.querySelector('input[type="text"]');
let table = document.querySelector('.list');
let tbody = document.querySelector('.tbody');

let ascBtn = document.querySelector('.btn-asc');
let descBtn = document.querySelector('.btn-desc');

// let itemsToSort = document.querySelector('.shopping-list-item');
// let shoppingItems = [];

addItem.addEventListener('click', addItemToList);
// ascBtn.addEventListener('click', ascend);
// descBtn.addEventListener('click', descend);

function addItemToList() {
    if (input.value !== '') {

        let tableRow = document.createElement('tr');
        let firstTableData = document.createElement('td');
        let secondTableData = document.createElement('td');
        let actionBtn = document.createElement('button');
        actionBtn.className = 'action-btn btn';
        actionBtn.innerText = 'Mark as buyed';
        firstTableData.className = 'shopping-list-item';
        tbody.appendChild(tableRow);
        firstTableData.innerHTML = input.value;
        tableRow.appendChild(firstTableData);
        secondTableData.appendChild(actionBtn)
        tableRow.appendChild(secondTableData);
        input.value = '';
        // console.log(firstTableData, secondTableData)
        // shoppingItems.push(input.value);

    }
}

input.addEventListener('keydown', keyPress);

function keyPress(e) {
    if (input.value !== '' && e.keyCode == 13) {

        let tableRow = document.createElement('tr');
        let firstTableData = document.createElement('td');
        let secondTableData = document.createElement('td');
        let actionBtn = document.createElement('button');
        actionBtn.className = 'action-btn btn';
        actionBtn.innerText = 'Mark as buyed';
        firstTableData.className = 'shopping-list-item';
        tbody.appendChild(tableRow);
        firstTableData.innerHTML = input.value;
        tableRow.appendChild(firstTableData);
        secondTableData.appendChild(actionBtn)
        tableRow.appendChild(secondTableData);
        input.value = '';

    }
}

table.addEventListener('click', function (e) {
    // console.log(e.target)
    // console.log('this works')
    let dynamicTd = document.querySelectorAll('.shopping-list-item');
    if (e.target && e.target.className == 'action-btn btn') {
        // console.log('this works too');
        const td = e.target.parentNode.parentNode.querySelector("td")
        if (td) {
            td.className = "checked";
        }

    }
})

// function ascend(a, b) {
//     let item = shoppingItems.value;
//     console.log(item);
// }

// function descend() {

// }