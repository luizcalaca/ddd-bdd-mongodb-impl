import { Request, Response } from 'express';
import { IBook } from '../../domain/entities/interfaces/IBook';
import { IBookPersistence, BookRepository } from '../../domain/repository/BookRepository';
import TransferService from '../../domain/usecase/TransferService';
import BookODM from '../models/BookODM';

class TransferController {
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
    const transfer = new TransferService(payment, repository);
    transfer.create()
    return this._res.status(201).json(transfer);
  }
}
export default TransferController;
