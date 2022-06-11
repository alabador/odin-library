const libraryDiv = document.querySelector('.library-container');
const newButton = document.querySelector('.new');
const form = document.querySelector('.new-book-form');
const cancel = document.querySelector('.cancel');
const add = document.querySelector('.add');

let newTitle = document.querySelector('#title');
let newAuthor = document.querySelector('#author');
let newPages = document.querySelector('#pages');
let newReadStatus = document.querySelector('#read');
let newUnreadStatus = document.querySelector('#not-read');

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



/*Form*/
function toggleForm() {
    form.classList.toggle('show-form');
}

function clearForm() {
    newTitle.value = '';
    newTitle.textContent = '';
    newAuthor.value = '';
    newAuthor.textContent = '';
    newPages.value = '';
    newPages.textContent = '';
    newReadStatus.checked = false;
    newUnreadStatus.checked = false;
}

newButton.addEventListener('click', toggleForm);
cancel.addEventListener('click', toggleForm);
cancel.addEventListener('click', clearForm);

// open form
// input data on form
//1. pressing cancel clears form values/textcontent and hides form
//2. pressing add passes the values from inputs into a new iteration of constructor
//2.1 once new iteration made, clear values/textcontent and hide form
//3. new book is passed into addBookToLibrary()
//4. displayBook() to display books in array
//5. ??? - to be continued