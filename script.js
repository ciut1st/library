const myLibrary = [];

class Book {
    title
    author
    pages
    read
    
    constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }
    
    toggleRead() {
    this.read = !this.read
    }
}

document.querySelector('.new-book-form').addEventListener('submit', function () {
    event.preventDefault()
    addBookToLibrary()
})

function addBookToLibrary() {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').checked
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    render()
}

function render() {
    let libraryDiv = document.querySelector('.library')
    libraryDiv.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        let bookDiv = document.createElement("div")
        bookDiv.innerHTML = `
        <div class="card">
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">by ${book.author}</h5>
            </div>
            <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="remove-button" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read-button" onclick="toggleRead(${i})">Toggle Read</button>
            </div>
        </div>
        `
        libraryDiv.appendChild(bookDiv)
    }
}

function toggleRead(index) {
    myLibrary[index].toggleRead()
    render()
}



function removeBook(index) {
    myLibrary.splice(index, 1)
    render()
}