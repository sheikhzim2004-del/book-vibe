import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/ContextProvider';






// const booksPromise = fetch('/booksData.json').then(res => res.json());



const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const expectedBook = books.find(book => book.bookId == id);


  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing
  } = expectedBook;

  
  const {handleMarkAsRead, handleWishList} =useContext(BookContext)

 

  return (
    <div className="card grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-14">
      <figure className='p-20 rounded-3xl bg-base-200'>
        <img
          src={image}
          alt={bookName}
          className='h-150 rounded-xl' />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl font-bold">{bookName}</h2>
        <p className='text-2xl font-medium'>By: {author}</p>

        <div>
          <p className='border-t-2'>{category} </p>
        </div>

        <p className='border-t-2 text-lg'>
          <span className='text-xl font-semibold'>Review:  </span>
          {review}
        </p>
        <div className='flex items-center gap-2.5 font-bold'>
          <h4>Tags:</h4>
          {tags.map((tag, i) => <div key={i} className="badge badge-soft badge-success">{tag}</div>)}
        </div>

        <div className='card-action border-t-2'>
          <div className='flex justify-between gap-2 items-center text-lg font-medium'>
            <span className='text-black/60'>Number of Pages:</span><span>{totalPages}</span>
          </div>
          <div className='flex justify-between gap-2 items-center text-lg font-medium'>
            <span className='text-black/60'>Publisher:</span><span>{publisher}</span>
          </div>
          <div className='flex justify-between gap-2 items-center text-lg font-medium'>
            <span className='text-black/60'>Year of Publishing:</span><span>{yearOfPublishing}</span>
          </div>
          <div className='flex justify-between gap-2 items-center text-lg font-medium'>
            <span className='text-black/60'>Rating:</span><span>{rating}</span>
          </div>
        </div>

        <div className="card-actions">

          <button 
          className="btn btn-info btn-soft"
          onClick={() => handleMarkAsRead(expectedBook)}
          >Mark as Read</button>

          <button 
          className="btn btn-primary"
          onClick={() => (handleWishList(expectedBook))}
          > Add to WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;