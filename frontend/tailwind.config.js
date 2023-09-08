/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/EditBook.jsx",
    "./src/pages/CreateBook.jsx",
    "./src/pages/DeleteBook.jsx",
    "./src/pages/ShowBook.jsx",
    "./src/components/BackButton.jsx",
    "./src/components/Spinner.jsx",
    "./src/components/home/BookCard.jsx",
    "./src/components/home/BookSingleCard.jsx",
    "./src/components/home/BooksTable.jsx",
    "./src/components/home/BookModal.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
