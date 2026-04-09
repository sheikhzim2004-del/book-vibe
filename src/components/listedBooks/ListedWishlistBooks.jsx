import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/ContextProvider';
import BookCard from '../ui/BookCard';
import NoBookYet from './NoBookYet';

const ListedWishlistBooks = ({sortingType}) => {

  const { readList, wishList } = useContext(BookContext)
  console.log(readList, wishList, 'read and wish')

  const [filterWishlist, setFilterWishlist] = useState(wishList)




  useEffect(() => {
    if (sortingType) {
      if (sortingType === 'Pages') {
        const sortData = [...wishList].sort((a, b) => a.totalPages - b.totalPages)
        console.log(sortData, 'sort by pages')
        setFilterWishlist(sortData)
      } else if (sortingType === 'Rating') {
        const sortData = [...wishList].sort((a, b) => a.rating - b.rating)
        console.log(sortData, 'sort by rating')
        setFilterWishlist(sortData)
      }
    }
  }, [sortingType, wishList])



  if (filterWishlist.length === 0) {
    return <NoBookYet></NoBookYet>
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        filterWishlist.map((book, i) => <BookCard key={i} book={book}></BookCard>)
      }
    </div>
  );
};

export default ListedWishlistBooks;