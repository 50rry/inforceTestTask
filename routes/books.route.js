import express from 'express';
import {BookController} from "../controllers/books.controller.js";

const router = express.Router();


router.get('/', BookController.getAllBooks);
router.get('/:bookId', BookController.getBook);
router.post('/', BookController.createBook);
router.put('/:bookId', BookController.updateBook)
router.delete('/:bookId', BookController.deleteBook)


export default router;