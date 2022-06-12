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


function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook() {
    clearBooks();
    for(book of myLibrary){
        //Turn object key-value properties into arrays
        let bookInfo = Object.values(book); 
        let bookKeys = Object.keys(book);

        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        libraryDiv.appendChild(bookDiv);
        for (let i=0; i<bookInfo.length; i++){
            let newPara = document.createElement('p');
            newPara.textContent = `${bookKeys[i]}: ${bookInfo[i]}`;
            bookDiv.appendChild(newPara);
        }
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