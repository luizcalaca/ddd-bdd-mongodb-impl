import { Request, Response } from 'express';
import { IBook } from '../../domain/entities/interfaces/IBook';
import { IBookPersistence, BookRepository } from '../../domain/repository/BookRepository';
import BookService from '../../domain/usecase/BookService';
import BookODM from '../models/BookODM';

class BookController {
  private _req: Request;
  private _res: Response;
  private persistence: IBookPersistence = new BookODM()

  constructor(req: Request, res: Response) {
    this._req = req;
    this._res = res;
  }

  public async create() {
    const payment: IBook = {
      name: this._req.body.name,
      isbn: this._req.body.isbn,
    }
    const repository = new BookRepository(this.persistence)
    const book = new BookService(payment, repository);
    await book.create()
    return this._res.status(201).json(book);
  }

  public async list() {
    const repository = new BookRepository(this.persistence)
    const book = new BookService({} as any, repository);
    const result = await book.read()
    return this._res.status(201).json(result);
  }
}
export default BookController;
