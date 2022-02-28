const myLibrary = []

const container = document.querySelector(".container");
const bookButton = document.querySelector(".btn");
const books = document.querySelector(".books");

// constructor
// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }

// class 
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function displayArray(arr) {

  // there has to be a better way to add an item from the array
  books.innerHTML = '';

  // for (let element of arr) {
  myLibrary.forEach(function (value, i) {
    // create a container card 
    const bookDiv = document.createElement('div');
    bookDiv.classList.add("book");
    // add book title to card
    bookDiv.appendChild(generateElement("Title: " + value.title, "title", "div"))
    // add book author to card
    bookDiv.appendChild(generateElement("By: " + value.author, "author", "div"))
    // add delete button to card
    bookDiv.appendChild(generateElement("Delete", i, "button"));
    // add book card to DOM
    bookDiv.classList.add(i);
    books.appendChild(bookDiv)
  });
}

function generateElement(val, className, type) { 
  const ele = document.createElement(type); 
  ele.classList.add(className);
  ele.textContent = val
  if (type === "button") {ele.addEventListener("click", removeFromArray)}
  return ele;
}

// this gets bound to the delete button
function removeFromArray(e) {
  index = e.target.className;
  myLibrary.splice(index, 1);
  displayArray(myLibrary);
}

function addBookToLib() {
  let bookName = window.prompt("Enter a name of a book: ");
  let bookAuthor = window.prompt("Who wrote it? ")
  let tempBook = new Book(bookName, bookAuthor);
  myLibrary.push(tempBook);
  displayArray(myLibrary);
}

// add initial book to array for testing layout
function generateFiller(title, author) {
  let tempBook = new Book(title, author)
  myLibrary.push(tempBook);
}

// generate 7 cards to test layout
for (let i = 1; i <= 17; i++) {
  generateFiller("book " + i, "author " +  i);
}

bookButton.addEventListener("click", addBookToLib);

// call function once to display the first button
displayArray(myLibrary);