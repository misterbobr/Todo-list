import './bootstrap';

function toggleDropdown(dropdown) {
    if (dropdown.style.display === "")
        dropdown.style.display = "block";
    else
        dropdown.style.display = "";
}

async function isLogged() {
    let response = await fetch(`${window.origin}/isLogged`, {
        method: "GET"
    }).then((res) => {
        return res.json();
    });
    response = await response['result'];
    return response;
}

function createNote(list, note, logged) {
    if (!document.getElementById(`note${note.id}`)) {
        let div = document.createElement("div"); // Создаем заметку
        let p = document.createElement("p");
        p.innerHTML = note.text;
        p.className = "listItemText";
        p.onblur = function() {
            editItem(p);
        }
        div.appendChild(p);
        div.className = "listItem";
        div.id = `note${note.id}`;
        if (logged){ // Если залогинены, то отображать кнопку редактирования
            let editButton = document.createElement("img");
            editButton.src = "/images/edit.png";
            editButton.width = 40;
            editButton.height = 40;
            editButton.className = "editButton";
            editButton.onclick = function() { // вкл/выкл редактирование 
                if (p.contentEditable !== 'true')
                    p.contentEditable = 'true';
                else
                    p.contentEditable = 'false';
            }
            div.appendChild(editButton);
        }
        let delButton = document.createElement("img"); // Кнопка удаления
        delButton.src = "/images/erase.png";
        delButton.width = 40;
        delButton.height = 40;
        delButton.className = "delButton";
        delButton.onclick = function() { // удаляет элемент по нажатию
            removeItem(note.id);
            div.remove();
        }
        div.appendChild(delButton);
        list.appendChild(div);
    }
}

async function show(list) {
    let response = await fetch(`${window.origin}/getData`, {
        method: "GET"
    }).then((res) => {
        return res.json();
    }).then((data) => {
        return data['data'];
    });

    let logged = await isLogged();
    response.forEach(note => {
        //console.log(note);
        createNote(list, note, logged);
    });
}

async function addItem() {
    let text = input.value;

    let response = await fetch(`${window.origin}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
        body: JSON.stringify({
            text: `${text}`
            })
        }).then((res) => {
            return res.json();
        })

    input.value = '';
    console.log(`Added note: ${response.text}`);
    show(list);
    return response;
}

async function editItem(item) {
    let text = item.innerHTML;
    let id = item.parentElement.id.match(/\d+/);

    let response = await fetch(`${window.origin}/edit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
        body: JSON.stringify({
            id: `${id}`,
            text: `${text}`
            })
        });

    response = await response.json();

    console.log(`Edited note to: ${response.text}`);
    return response;
}

async function removeItem(id) {
    let response = await fetch(`${window.origin}/remove`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
        body: JSON.stringify({
            id: `${id}`
            })
        }).then((res) => {
            return res.json();
        });

    console.log(`Removed note: ${response.text}`);
    return response;
}

//document.addEventListener("DOMContentLoaded", function(event) {
//    
//});

const list = document.getElementById("list");
const addButton = document.getElementById("addButton");
const input = document.getElementById("content");
const loginButton = document.getElementById("login-button");
const dropdown = document.querySelector(".dropdown-menu");

show(list);

addButton.onclick = function() {
    addItem(list);
}

loginButton.onclick = function() {
    toggleDropdown(dropdown);
}

//const login = document.getElementById("login");
//const login = document.getElementById("login");
//const login = document.getElementById("login");
//
//login.onclick = function() {
//    let response = await fetch(`${window.origin}/login`, {
//        method: "POST",
//        headers: {
//            "Content-Type": "application/json",
//            "Accept": "application/json",
//            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//            },
//        body: JSON.stringify({
//            login: `${}`,
//            password: `${}`
//            })
//        }).then((res) => {
//            return res.json();
//        })
//    return response;
//}