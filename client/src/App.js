import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [book, setBook] = useState(null);
  // Internal api 
  // useEffect(() => {
  //   fetch(`/api`)
  //     .then(res => res.json())
  //     .then(book => setBook(book.title));
  //   console.log(book);
  // }, []);

  // External api
  useEffect(() => {
    fetch(`/getData`)
      .then(res => res.json())
      .then(book => setBook(book.title));
    console.log(book);
  });

  // Internal api with Internal Json

  // useEffect(() => {
  //   fetch(`/book`)
  //     .then(res => res.json())
  //     .then(book => setBook(book.title));
  //   console.log(book);
  // }, []);



  return (
    <div className="App">
      <header className="App-header">
        <p>
          {book}
        </p>
      </header>
    </div>
  );
}

export default App;