const newBookButton = document.querySelector(".new-book-button")
newBookButton.addEventListener('click', function() {
    let newBookForm = document.querySelector(".new-book-form")
    newBookForm.style.display = "block"
})

document.querySelector('.new-book-form').addEventListener('submit', function () {
    event.preventDefault()
    addBookToLibrary()
})

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').checked
    let newBook = new Book(title, author, pages, read)
    console.log(newBook)
}