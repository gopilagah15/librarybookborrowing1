// src/components/MonthlyReport.js
import React from 'react';

const MonthlyReport = ({ borrowedBooks }) => {
  const totalFines = borrowedBooks.reduce((total, book) => total + (book.returnDate < new Date().toISOString().split('T')[0] ? 1 : 0), 0);

  return (
    <div>
      <h2>Monthly Report</h2>
      <p>Total Books Borrowed: {borrowedBooks.length}</p>
      <p>Total Fines Collected: ${totalFines}</p>
    </div>
  );
};

export default MonthlyReport;
