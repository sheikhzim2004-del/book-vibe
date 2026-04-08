import React, { createContext, useState } from 'react';

export const BookContext = createContext();


const ContextProvider = ({ children }) => {



    const [storedBooks, setStoredBooks] = useState([]);
    const handleMarkAsRead = (currentBook) => {
        //step-1: store book id
        //step-2: where to store
        //step-3: array or collection
        //step-4: if the book is already exist then show a alart or tost
        //step-5: if not have then add the book in the array  or collection

        const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId);

        if (isExistBook) {
            alert('The book is already exist')
        } else {
            setStoredBooks([...storedBooks, currentBook])
            alert(`${currentBook.bookName} is added to BookList`)
        }
        // console.log(currentBook, storedBooks)
    }


    const data = {
        handleMarkAsRead,
        storedBooks,
        setStoredBooks
    }


    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default ContextProvider;