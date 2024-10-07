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
    let status = document.getElementsByClassName("status").value;

    console.log(title, author, length, status);
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

}

addBookToLibrary();

// book display

function bookDisplay () {
    let bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    bookContainer.appendChild(bookItem);
}