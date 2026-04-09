import React, { useContext } from 'react';
import { BookContext } from '../../context/ContextProvider';
import BookCard from '../ui/BookCard';
import NoBookYet from './NoBookYet';

const ListedReadBooks = () => {

  const { readList, wishList } = useContext(BookContext)
    console.log(readList, wishList, 'read and wish')

    if(readList.length === 0){
      return <NoBookYet></NoBookYet>
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        readList.map((book, i) => <BookCard key={i} book={book}></BookCard>)
      }
    </div>
  );
};

export default ListedReadBooks;