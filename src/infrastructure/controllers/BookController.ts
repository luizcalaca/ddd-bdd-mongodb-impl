import { Request, Response } from 'express';
import { IBook } from '../../domain/entities/interfaces/IBook';
import { IBookPersistence, BookRepository } from '../../domain/repository/BookRepository';
import TransferService from '../../domain/usecase/BookService';
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
    const book = new TransferService(payment, repository);
    await book.create()
    return this._res.status(201).json(book);
  }
}
export default BookController;
