import { IBook } from "../entities/interfaces/IBook";
import { BookRepository } from "../repository/BookRepository";


class BookService {
  private _book: IBook;

  constructor(book: IBook, private repository: BookRepository) {
    if (!this.isValidIsbn(book.isbn)) throw new Error('Invalid Key!');
    this._book = book;
  }

  public isValidIsbn(key: number): boolean {
    return key.toString().length > 5
  }

  public create() {
    const payment: IBook = {
      name: this._book.name,
      isbn: this._book.isbn,
    }
    return this.repository.create(payment)
  }

  public read() {
    return this.repository.read()
  }
}

export default BookService;



