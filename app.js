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



addItem.addEventListener('click', addItemToList);
ascBtn.addEventListener('click', ascend);
descBtn.addEventListener('click', descend);

function addItemToList() {
    if (input.value !== '') {

        let tableRow = document.createElement('tr');
        let firstTableData = document.createElement('td');
        let secondTableData = document.createElement('td');
        let actionBtn = document.createElement('button');
        actionBtn.className = 'action-btn btn';
        actionBtn.innerText = 'Mark as buyed';
        firstTableData.classList.add('item');
        tbody.appendChild(tableRow);
        firstTableData.innerHTML = input.value;
        tableRow.appendChild(firstTableData);
        secondTableData.appendChild(actionBtn)
        tableRow.appendChild(secondTableData);
        input.value = '';

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
        firstTableData.classList.add('item');
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
    if (e.target && e.target.className == 'action-btn btn') {
        // console.log('this works too');
        const td = e.target.parentNode.parentNode.querySelector("td");
        if (td) {
            td.classList.add('checked');
        }

    }
})

function ascend() {
    let itemsToSort = document.querySelectorAll('.item');
    let shoppingItems = [];
    // console.log(itemsToSort);
    itemsToSort.forEach(item => shoppingItems.push(item.innerText));
    // console.log(shoppingItems);
    let ascending = shoppingItems.sort((a, b) => a - b);
    // console.log(ascending);
    // console.log(itemsToSort);
    itemsToSort.forEach((item, i) => {
        item.innerText = ascending[i];
    })
}

function descend() {
    let sortDescend = document.querySelectorAll('.item');
    let shoppingItems2 = [];
    sortDescend.forEach(item => shoppingItems2.push(item.innerText));
    let descending = shoppingItems2.sort((a, b) => b - a);
    sortDescend.forEach((item, i) => {
        item.innerText = descending[i];
    })
}