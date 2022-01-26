import express from "express";
import book from './books.route.js'

const router = express.Router();

router.use('/book', book)

export default router;
