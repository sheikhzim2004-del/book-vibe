import React, { useState } from 'react';
import { BookContext } from '../../context/ContextProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadBooks from '../../components/listedBooks/ListedReadBooks';
import ListedWishlistBooks from '../../components/listedBooks/ListedWishlistBooks';

const Books = () => {


  // const { storedBooks, wishList } = useContext(BookContext)
  // console.log(storedBooks, wishList, 'read and wish')

  const [sortingType, setSoritngType] = useState("");
  console.log(sortingType, 'sorting type');


  return (
    <div className='container mx-auto py-6'>

      <div className="dropdown dropdown-bottom flex justify-center items-center">
        <div tabIndex={0} role="button" className="btn m-1">Sort By:  {sortingType || 'Select'}⬇️</div>
        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={()=> setSoritngType('Pages')}><a>Pages</a></li>
          <li onClick={()=> setSoritngType('Rating')}><a>Rating</a></li>
        </ul>
      </div>

      <Tabs>
        <TabList className='text-lg flex gap-5'>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadBooks sortingType={sortingType}></ListedReadBooks>
        </TabPanel>
        <TabPanel>
          <ListedWishlistBooks sortingType={sortingType}></ListedWishlistBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;