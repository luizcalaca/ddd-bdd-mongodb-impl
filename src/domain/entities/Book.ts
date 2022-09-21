import { IBook } from "./interfaces/IBook";

class Book {
  private _name: string;
  private _isbn: number;

  constructor(book: IBook) {
    this._name = book.name;
    this._isbn = book.isbn;
  }
}

export default Book;