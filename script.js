import { Book } from './classes/Book.js';
import { Library } from './classes/Library.js';

//console.log("Script principal chargé");

const library = new Library();

// creation des constantes pour les éléments du DOM
const addBookForm = document.getElementById('addBookForm');
const listBooksBtn = document.getElementById('listBooksBtn');
const searchForm = document.getElementById('searchForm');
const results = document.getElementById('results');


// ajout des écouteurs d'événements
// ajout d'un livre
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('titleInput').value.trim();
  const author = document.getElementById('authorInput').value.trim();
  if (title && author) {
    const book = new Book(title, author);
    library.addBook(book);
    results.innerText = `Livre ajouté : ${book.getDetails()}`;
    addBookForm.reset();
  }
});

// lister les livres
listBooksBtn.addEventListener('click', () => {
  results.innerHTML = '';
  const books = library.listBooks();
  if (books.length === 0) {
    results.innerText = "Aucun livre dans la bibliothèque.";
  } else {
    books.forEach(book => {
      const p = document.createElement('p');
      p.textContent = book.getDetails();
      results.appendChild(p);
    });
  }
});

// recherche d'un livre par titre
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('searchTitle').value.trim();
  const result = library.findBookByTitle(title);
  results.innerText = result;
});
