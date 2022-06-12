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

// const bookA = new Book('test','abs',242,'read');
// const bookB = new Book('Tao of blah','seee',154,'have not read');

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook() {
    clearBooks();
    for(book of myLibrary){
        let bookInfo = Object.values(book); // this is an array
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.textContent = bookInfo;
        libraryDiv.appendChild(bookDiv);
    }
}

function clearBooks() {
    while (libraryDiv.firstChild){
        libraryDiv.removeChild(libraryDiv.lastChild);
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

function formToBook() {
    const formTitle = newTitle.value;
    const formAuthor = newAuthor.value;
    const formPages = newPages.value;
    let formReadStatus = '';
    if (newReadStatus.checked === true && newUnreadStatus.checked === false) {
        formReadStatus = 'read';
    }
    else if (newUnreadStatus.checked === true && newReadStatus.checked === false) {
        formReadStatus = 'have not read';
    }
    else {
        formReadStatus = 'have not read';
    }
    addBookToLibrary(new Book(formTitle, formAuthor, formPages, formReadStatus));
}

newButton.addEventListener('click', toggleForm);
cancel.addEventListener('click', toggleForm);
cancel.addEventListener('click', clearForm);
add.addEventListener('click', formToBook);
add.addEventListener('click', displayBook);
add.addEventListener('click', toggleForm);
add.addEventListener('click', clearForm);

// open form [good]
// input data on form [good]
//1. pressing cancel clears form values/textcontent and hides form [good]
//2. pressing add passes the values from inputs into a new iteration of constructor [good]
//2.1 once new iteration made, clear values/textcontent and hide form [good]
//3. new book is passed into addBookToLibrary() [good]
//4. displayBook() to display books in array [need to fix duplicates]
//5. ??? - to be continued