import { isValidObjectId, Model, UpdateQuery, Schema, model } from 'mongoose';
import { IBook } from '../../domain/entities/interfaces/IBook';
import { IBookPersistence } from '../../domain/repository/BookRepository';

class BookODM implements IBookPersistence {
  private _schema: Schema;
  private _model: Model<IBook>;

  constructor() {
    this._schema = new Schema<IBook>({
      name: { type: String, required: true },
      isbn: { type: Number, required: true },
    });
    this._model = model('Book', this._schema);
  }

  public async create(obj: IBook): Promise<IBook> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string): Promise<IBook | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async read(): Promise<IBook[]> {
    return this._model.find();
  }

  public async update(_id: string, obj: Partial<IBook>):
    Promise<IBook | null> {
    if (!isValidObjectId(_id)) throw Error('Erro');

    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<IBook>,
      { new: true },
    );
  }

  public async delete(_id: string): Promise<IBook | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOneAndDelete({ _id });
  }
}
export default BookODM;