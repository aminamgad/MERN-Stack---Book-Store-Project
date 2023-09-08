import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router()
// Route for save a new book

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.puplishYear) {
      return res.status(400).send({
        message: "Sens all required fields: title, author and puplishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      puplishYear: req.body.puplishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Get all books from Database

router.get("/", async (req, res) => {
  try {
    console.log(req.params);
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
// Route for Get One books from Database

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// Route for Update a Book

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.puplishYear) {
      return res.status(400).send({
        message: "Sens all required fields: title, author and puplishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      puplishYear: req.body.puplishYear,
    };
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(400).json({ message: "Book not found" });
    }
    return res.status(201).send("Book is Updated !");
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for delete Book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).json({ message: "Book not found" });
    }
    return res.status(201).send("Book is Deleted !");
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;