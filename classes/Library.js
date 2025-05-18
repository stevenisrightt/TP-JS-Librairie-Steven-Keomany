import { Book } from './Book.js';

//console.log("Module Library chargé");
export class Library {
  constructor() {
    this.books = this.loadFromStorage();
  }

  // avoir la librairie depuis le localStorage
  loadFromStorage() {
    const data = localStorage.getItem('libraryBooks');
    if (data) {
      const parsed = JSON.parse(data);
      return parsed.map(book => new Book(book.title, book.author));
    }
    // si pas de librairie, on retourne un tableau vide
    return [];
  }

    // sauvegarder la librairie dans le localStorage
  saveToStorage() {
    localStorage.setItem('libraryBooks', JSON.stringify(this.books));
  }

    // ajouter un livre à la librairie
  addBook(book) {
    this.books.push(book);
    // on sauvegarde la librairie directement dans le localStorage
    this.saveToStorage();
  }

  
  listBooks() {
    return this.books;
  }

  findBookByTitle(title) {
    const book = this.books.find(b => b.title === title);
    return book ? book.getDetails() : "Livre non trouvé.";
  }
}
