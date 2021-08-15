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
let shoppingItems = [];

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
        tbody.appendChild(tableRow);
        firstTableData.innerHTML = input.value;
        tableRow.appendChild(firstTableData);
        secondTableData.appendChild(actionBtn)
        tableRow.appendChild(secondTableData);
        // console.log(firstTableData, secondTableData)
        shoppingItems.push(input.value);

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
        tbody.appendChild(tableRow);
        firstTableData.innerHTML = input.value;
        tableRow.appendChild(firstTableData);
        secondTableData.appendChild(actionBtn)
        tableRow.appendChild(secondTableData);
        shoppingItems.push(input.value);

    }
}

table.addEventListener('click', function (e) {
    console.log(e.target)
    console.log('worksss')
    if (e.target && e.target.className == 'action-btn') {
        console.log('works')
        // firstTableData.style.textDecoration = 'line-through'
        // will not work yet it is out of scope
    }
})

// function ascend() {
//     let table = document.querySelector('.list');
//     let columns;
//     let switching = true;
// }

// function descend() {

// }