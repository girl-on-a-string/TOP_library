//variables

const addBook = document.getElementById("add-book");
const popUp = document.getElementById("popup");
const overlay = document.getElementById("overlay");

// popup on addbook click

addBook.addEventListener("click", () => {
    overlay.style.display = "initial";

    popUp.style.display = "initial";
    popUp.style.top = "50%";
    popUp.style.bottom = "50%";
})

//

const myLibrary = [];

function book () { //the constructor

}

function addBookToLibrary () {

}