import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({ book }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='p-6'>
                <img
                    src={book.image}
                    alt={book.bookName}
                    className='h-75 rounded-xl' />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-2.5 font-bold'>
                    {book.tags.map((tag, i) => <div key={i} className="badge badge-soft badge-success">{tag}</div>)}
                </div>
                <h2 className="card-title text-2xl font-bold">
                    {book.bookName}
                </h2>
                <p className='text-lg font-medium'>{book.author}</p>

                <div className="card-actions justify-between border-t-2 border-dashed py-6 text-xl">
                    <div className="font-semibold">{book.category}</div>
                    <div className="flex items-center gap-2">{book.rating}<FaRegStar></FaRegStar></div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;