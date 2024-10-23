// src/components/BorrowedBooksList.js
import React from 'react';

const BorrowedBooksList = ({ borrowedBooks }) => {
  const calculateFine = (returnDate) => {
    const today = new Date();
    const returnDateObj = new Date(returnDate);
    const diffTime = returnDateObj - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Difference in days
    return diffDays > 0 ? Math.abs(diffDays) * 1 : 0; // $1 fine per day overdue
  };

  return (
    <div>
      <h2>Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p>No books borrowed yet.</p>
      ) : (
        borrowedBooks.map((book, index) => (
          <div key={index}>
            <h3>{book.bookTitle}</h3>
            <p>User: {book.userName}</p>
            <p>Borrow Date: {book.borrowDate}</p>
            <p>Return Date: {book.returnDate}</p>
            <p>Fine: ${calculateFine(book.returnDate)}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default BorrowedBooksList;
