//console.log("Module Book chargé");

export class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
  }
  getDetails(){
    return `Titre: ${this.title} / Auteur: ${this.author}`;
  }
}