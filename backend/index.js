import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js'
import bookRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

// Middelware for parsing request body
app.use(express.json());

// Middelware for Handling CORS Policy
// Option:1 Allow All Origins with Default of cors(*)
app.use(cors());
// Option:2 Allow Cutom Origins

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods:['GET', 'POST', 'PUT', 'DELETE'],
//     allowHeaders:['Content-Type'],
// }))

app.get("/", (req, res) => {
  // console.log(req);
  return res.status(214).send("Hi MR Amin");
});

app.use('/books', bookRoute)
// Connect with MongoDB by Mongoose

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("App is connected with Database");
    app.listen(PORT, () => {
      console.log(`Is Running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    return console.log(err);
  });
