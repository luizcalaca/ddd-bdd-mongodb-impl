import { IBookPersistence, BookRepository } from "../../src/domain/repository/BookRepository"
import { stubInterface } from "ts-sinon";
import chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai'
import sinon from 'sinon'
import BookService from "../../src/domain/usecase/BookService";
import { IBook } from "../../src/domain/entities/interfaces/IBook";

chai.use(chaiAsPromised)
const expect = chai.expect

describe('BDD - Creating an Book', () => {
    it('BDD - Should create an Book', async () => {
        const BookMock: IBook = {
            name: "One",
            isbn: 3452345,
        }

        const iPersistence = stubInterface<IBookPersistence>()
        const bookRepository = new BookRepository(iPersistence)
        bookRepository.create = sinon.stub().returns(BookMock)

        const usecase = new BookService(BookMock, bookRepository)

        expect(usecase.create()).to.be.equal(BookMock)
    })
})