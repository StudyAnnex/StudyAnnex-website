import books from "./data/books/books Library.js";
import {subjects} from "./data/books/books subjects.js";
import generateId from "./utils/generatingId.js";

const contentElement = document.querySelector('.js-content');

let htmlContent ='';

subjects.forEach((subject)=>{
  let htmlBooksContainer = '';
  htmlContent += `
    <section class="books-container">
      <div class="subject-name">
        ${subject}
      </div>
      <div class="books-grid" id="${subject.replace(' ', '')+'Grid'}">    
  `;

  books.forEach((book)=>{
    if (book.subject === subject) {
      htmlBooksContainer += `
      <div class="book-content">
        <div class="thumbnail-container">
          <img class="thumbnail" src="${book.image}" alt="${book.title}">
        </div>
        <button class="download-button" data-book-id="${book.id}">
          Download
        </button>
      </div>
      `;
    }
  });

  htmlContent += htmlBooksContainer;

  htmlContent += `
      </div>
      <div class="more-icon-container" id="${'more'+subject.replace(' ', '')}">
        <img src="icons/angle-down round.png" onclick="document.getElementById('${subject.replace(' ', '')+'Grid'}').style.height = 'auto'; document.getElementById('${'more'+subject.replace(' ', '')}').style.display = 'none';">
      </div>
    </section>
  `;
});


contentElement.innerHTML = htmlContent;

const downloadButtons = document.querySelectorAll('.download-button');
downloadButtons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    const bookId = button.dataset.bookId;
    books.forEach((value)=>{
      if (value.id === bookId) {
        window.location.href = value.downloadLink;
        console.log('hello');
        return;
      }
    });
  });
});
