//variables

const addBook = document.getElementById("add-book");
const popUp = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const submit = document.getElementById("submit");
const bookContainer = document.getElementById("book-list");

// popup on addbook click

addBook.addEventListener("click", () => {
    overlay.style.display = "initial";

    popUp.style.display = "initial";
    popUp.style.top = "50%";
    popUp.style.bottom = "50%";
});

// make popup disappear when you click outside it

function closePopup () {
    overlay.style.display = "none";
    popUp.style.display = "none";
}

overlay.addEventListener("click", () => { 
    closePopup();
});

// submit data + close popup

submit.addEventListener("click", (e) => {
    e.preventDefault();
    closePopup();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let length = document.getElementById("length").value;
    let status = document.getElementById("status").value;

    const newBook = new book(title, author, length, status);
    console.log(newBook);
});

// book handling

const myLibrary = [];

function book (title, author, length, status) { //the object constructor
    this.title = title;
    this.author = author;
    this.length = length;
    this.status = status;

    this.itemState = function () {
        console.log(`title: ${title}, author: ${author}, length: ${length}, status: ${status}`);
    }
}

function addBookToLibrary () {
    myLibrary.push(newBook);
    bookDisplay();
    console.log(myLibrary);
}

addBookToLibrary();

// book display

function bookDisplay () {
    let bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    bookContainer.appendChild(bookItem);

    let titleContainer = document.createElement("div");
    let titleLabelSpan = document.createElement("span");
    titleLabelSpan.innerText = "Title:";
    let titleContentSpan = document.createElement("span");
    titleContentSpan.innerText = title;
    titleContainer.appendChild(titleLabelSpan);
    titleContainer.appendChild(titleContentSpan);

    let authorContainer = document.createElement("div");
    let authorLabelSpan = document.createElement("span");
    authorLabelSpan.innerText = "Author";
    let authorContentSpan = document.createElement("span");
    authorContentSpan.innerText = author;
    authorContainer.appendChild(authorLabelSpan);
    authorContainer.appendChild(authorContentSpan);

    let countContainer = document.createElement("div");
    let countLabelSpan = document.createElement("span");
    countLabelSpan.innerText = "Page Count:";
    let countContentSpan = document.createElement("span");
    countContentSpan.innerText = length;
    countContainer.appendChild(countLabelSpan);
    countContainer.appendChild(countContentSpan);

    let statusContainer = document.createElement("div");
    let statusForm = document.createElement("form");
    let statusLabel = document.createElement("label");
    statusLabel.innerText = "Read?";
    let statusCheck = document.createElement("checkbox");
    statusContainer.appendChild(statusForm);
    statusContainer.appendChild(statusLabel);
    statusContainer.appendChild(statusCheck);

    bookItem.appendChild(titleContainer);
    bookItem.appendChild(authorContainer);
    bookItem.appendChild(countContainer);
    bookItem.appendChild(statusContainer);
}