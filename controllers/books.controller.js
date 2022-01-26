import {BookSchema} from '../schemas/book.schema.js';

export class BookController {

    /*static async getAllBooks(req, res) {
        const books = await BookSchema.find();
        res.status(200).json(books);
    }*/
    static async getAllBooks(req, res) {
        let {sort = 'title', offset = 0, limit = 8} = req.query;


        const totNumberOfBooksPromise = BookSchema
            .find().count()

        const booksPromise = BookSchema
            .find()
            .sort(sort)
            .skip(Number(offset)).limit(Number(limit));

        const [totNumberOfBooks, books] = await Promise.all([totNumberOfBooksPromise, booksPromise])
        res.status(200).json({count: totNumberOfBooks, books, offset, limit, sort});
    }

    static async getBook(req, res) {
        try {
            const {bookId} = req.params;
            const book = await BookSchema.findById(bookId);
            if (!book) {
                return res.status(404).send({
                    message: "Book has not been found"
                })
            }
            res.status(200).json(book);
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }

    static async createBook(req, res) {
        try {
            const {body} = req;
            const newBook = new BookSchema(body);
            const created_book = await newBook.save();
            return res.status(200).json(created_book);
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }

    static async updateBook(req, res) {
        try {
            const {body} = req;
            const {bookId} = req.params;
            const updatedBook = await BookSchema.findByIdAndUpdate(bookId, body);
            if (!updatedBook) {
                return res.status(404).send({
                    message: "Book has not been found"
                })
            }
            return res.status(204).end()
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }
    static async deleteBook(req, res){
        try {
            const {bookId} = req.params;
            const updatedBook = await BookSchema.findByIdAndDelete(bookId);
            if (!updatedBook) {
                return res.status(404).send({
                    message: "Book has not been found"
                })
            }
            return res.status(204).end()
        } catch (e) {
            return res.status(400).send({message: e.message});
        }
    }
}