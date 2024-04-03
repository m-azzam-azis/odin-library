const myLibrary = [];

const container = document.getElementById("table-container");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const button = document.getElementById("submit-form");

function Book(title, author, pages) {
  // the constructor...
  this.readStatus = false;
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  // do stuff here
  const newObject = new Book(title, author, pages);
  myLibrary.push(newObject);
  const rowContainer = document.createElement("tr");
  const titleBox = document.createElement("td");
  const authorBox = document.createElement("td");
  const pagesBox = document.createElement("td");
  const statusBox = document.createElement("td");
  const statusButton = document.createElement("button");
  const deleteContainer = document.createElement("td");
  const deleteButton = document.createElement("button");

  deleteButton.style.backgroundColor = "red";
  titleBox.innerText = title;
  authorBox.innerText = author;
  pagesBox.innerText = pages;

  function statusDisplay() {
    if (newObject.readStatus) {
      statusButton.innerText = "✅";
    } else {
      statusButton.innerText = "❌";
    }
  }
  statusBox.appendChild(statusButton);

  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    rowContainer.remove();
    myLibrary.remove(newObject);
    myLibrary = myLibrary.filter(!newObject);
  });

  statusButton.addEventListener("click", (e) => {
    e.preventDefault();
    newObject.readStatus = !newObject.readStatus;
    statusDisplay();
  });

  statusDisplay();
  deleteContainer.appendChild(deleteButton);
  rowContainer.appendChild(titleBox);
  rowContainer.appendChild(authorBox);
  rowContainer.appendChild(pagesBox);
  rowContainer.appendChild(statusBox);
  rowContainer.appendChild(deleteContainer);

  container.appendChild(rowContainer);
}

// TESTS
addBookToLibrary("Harry Potter", "J.K. Rowling", 600);
addBookToLibrary("Hercule Poirot", "Agatha Christie", 300);
// TESTS

button.addEventListener("click", (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;

  if (title && author && pages > 0) {
    addBookToLibrary(title, author, pages);
    resetInput();
  } else {
    return;
  }
});

function resetInput() {
  titleInput.value = authorInput.value = pagesInput.value = "";
}
