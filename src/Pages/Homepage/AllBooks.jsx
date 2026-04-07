import React, { use } from 'react';
import BookCard from '../../components/ui/bookCard';



const AllBooks = ({ booksPromise }) => {

    const books = use(booksPromise)
    console.log(books)

    return (
        <div className='my-12 container mx-auto'>
            <h2 className='text-3xl font-bold text-center'>Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                books.map((book, i) => {
                    return (
                        <BookCard key={i} book={book}></BookCard>
                    )
                })
            }
            </div>
        </div>
    );
};

export default AllBooks;