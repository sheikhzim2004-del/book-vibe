import React, { useContext } from 'react';
import { BookContext } from '../../context/ContextProvider';

const Books = () => {


    const {storedBooks, wishList} =useContext(BookContext)
    console.log(storedBooks, wishList, 'read and wish')
  return (
    <div>
      <p>read lish: {storedBooks.length}</p>
      <p>wish lish: {wishList.length}</p>
    </div>
  );
};

export default Books;