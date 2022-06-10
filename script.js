const libraryDiv = document.querySelector('.library-container');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

const bookA = new Book('test','abs',242,'read');
const bookB = new Book('Tao of blah','seee',154,'have not read');

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook() {
    for(book of myLibrary){
        let bookInfo = Object.values(book);
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.textContent = bookInfo;
        libraryDiv.appendChild(bookDiv);
    }
}
