import React from 'react';

// Book Component
const Book = () => {
  return (
    <div className="book-container">
      <h2>Book Component</h2>
      <p>This is a placeholder for the Book component.</p>
      <p>Here you can add information about a book or anything related to books.</p>

      <div className="book-details">
        <h3>Example Book:</h3>
        <ul>
          <li>Title: The Great Gatsby</li>
          <li>Author: F. Scott Fitzgerald</li>
          <li>Year: 1925</li>
        </ul>
      </div>
    </div>
  );
};

export default Book;
