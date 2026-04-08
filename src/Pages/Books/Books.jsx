import React, { useContext } from 'react';
import { BookContext } from '../../context/ContextProvider';

const Books = () => {


    const {storedBooks} =useContext(BookContext)
    console.log(storedBooks)
  return (
    <div>
      <p>Books Page</p>
    </div>
  );
};

export default Books;