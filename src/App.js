// src/App.js
import React, { useState } from 'react'; 
import BorrowBookForm from './component/BorrowBookForm';
import BorrowedBooksList from './component/BorrowedBooksList';
import MonthlyReport from './component/MonthlyReport';


const App = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const addBorrowedBook = (book) => {
    setBorrowedBooks([...borrowedBooks, book]);
  };

  return (
    <div>
      <h1>Library Book Borrowing System</h1>
      <BorrowBookForm addBorrowedBook={addBorrowedBook} />
      <BorrowedBooksList borrowedBooks={borrowedBooks} />
      <MonthlyReport borrowedBooks={borrowedBooks} />
    </div>
  );
};

export default App;
