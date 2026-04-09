import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/ContextProvider';
import BookCard from '../ui/BookCard';
import NoBookYet from './NoBookYet';

const ListedReadBooks = ({ sortingType}) => {
  const { readList, wishList } = useContext(BookContext)
  console.log(readList, wishList, 'read and wish')

  const [filterReadList, setFilterReadList] =useState(readList)


  useEffect(()=>{
    if(sortingType){
      if(sortingType === 'Pages'){
        const sortData = [...readList].sort((a,b) => a.totalPages - b.totalPages )
        console.log(sortData, 'sort by pages')
        setFilterReadList(sortData)
      }else if(sortingType === 'Rating'){
        const sortData = [...readList].sort((a,b) => a.rating - b.rating )
        console.log(sortData, 'sort by pages')
        setFilterReadList(sortData)
      }
    }
  }, [sortingType, readList]) 

      if(filterReadList.length === 0){
      return <NoBookYet></NoBookYet>
    }


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        filterReadList.map((book, i) => <BookCard key={i} book={book}></BookCard>)
      }
    </div>
  );
};

export default ListedReadBooks;