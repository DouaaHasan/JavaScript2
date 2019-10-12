"use strict";

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  }
];

// books covers as per their order in the above array.
const books_covers = [
  "https://images-na.ssl-images-amazon.com/images/I/51MzbjxE7bL._SX376_BO1,204,203,200_.jpg",
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg"
];

books.forEach(element => {
  // ul
  const uList = document.createElement("ul");

  // li for each book info & book cover
  const book = document.createElement("li");

  // p as requested, for each book title + book author
  const bookInfo = document.createElement("p");
  bookInfo.textContent = element.title;
  bookInfo.textContent += ": " + element.author;

  // img for each book cover
  const bookCover = document.createElement("img");
  bookCover.src = books_covers[books.indexOf(element)];
  book.alt = element.title;
  bookCover.height = 300;

  // appending
  book.appendChild(bookInfo);
  book.appendChild(bookCover);
  uList.appendChild(book);

  // if read ? green : red;
  element.alreadyRead
    ? (bookInfo.style.color = "green")
    : (bookInfo.style.color = "red");
  document.body.appendChild(uList);
});
