//variables

const addBook = document.getElementById("add-book");
const popUp = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const submit = document.getElementById("submit");

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
    e.preventDefault()
    closePopup()
});

//

const myLibrary = [];

function book () { //the constructor

}

function addBookToLibrary () {

}