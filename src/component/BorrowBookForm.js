// src/components/BorrowBookForm.js
import React, { useState } from 'react';

const BorrowBookForm = ({ addBorrowedBook }) => {
  const [userName, setUserName] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBorrowedBook({ userName, bookTitle, borrowDate, returnDate });
    setUserName('');
    setBookTitle('');
    setBorrowDate('');
    setReturnDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Book Title"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={borrowDate}
        onChange={(e) => setBorrowDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        required
      />
      <button type="submit">Borrow Book</button>
    </form>
  );
};

export default BorrowBookForm;
