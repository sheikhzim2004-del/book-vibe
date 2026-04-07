import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import AllBooks from './AllBooks';


const booksPromise = fetch('/booksData.json').then(res => res.json());

const Homepage = () => {

  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl flex mx-auto"></span>}>
        <AllBooks booksPromise={booksPromise}></AllBooks>
      </Suspense>
    </div>
  );
};

export default Homepage;