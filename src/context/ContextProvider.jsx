import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();


const ContextProvider = ({ children }) => {



    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        //step-1: store book id
        //step-2: where to store
        //step-3: array or collection
        //step-4: if the book is already exist then show a alart or tost
        //step-5: if not have then add the book in the array  or collection

        const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error('The book is already exist')
        } else {
            setStoredBooks([...storedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to ReadList`)
        }
        // console.log(currentBook, storedBooks)
    }
    const handleWishList = (currentBook) => {
        //step-1: store book id
        //step-2: where to store
        //step-3: array or collection
        //step-4: if the book is already exist then show a alart or tost
        //step-5: if not have then add the book in the array  or collection

        const isExistInBookList = storedBooks.find(book => book.bookId === currentBook.bookId)

        if(isExistInBookList){
            toast.error('The Book is already in Readlist')
            return;
        }

        const isExistBook = wishList.find(book => book.bookId === currentBook.bookId);


        if (isExistBook) {
            toast.error('The book is already exist')
        } else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to Wish List`)
        }
        // console.log(currentBook, storedBooks)
    }


    const data = {
        handleMarkAsRead,
        storedBooks,
        setStoredBooks,
        handleWishList,
        wishList,
        setWishList
    }


    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default ContextProvider;