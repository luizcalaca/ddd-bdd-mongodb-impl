import { IBook } from "../entities/interfaces/IBook"

export interface IBookPersistence {
    create(entity: any): Promise<any>
    read(): Promise<any>
}

class BookRepository {
    constructor(private iPersistence: IBookPersistence) { }
    public async create(entity: IBook) {
        return await this.iPersistence.create(entity)
    }

    public async read() {
        return await this.iPersistence.read()
    }
}

export { BookRepository }

