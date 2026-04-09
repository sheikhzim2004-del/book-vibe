import React, { useContext } from 'react';
import { BookContext } from '../../context/ContextProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadBooks from '../../components/listedBooks/ListedReadBooks';
import ListedWishlistBooks from '../../components/listedBooks/ListedWishlistBooks';

const Books = () => {


  const { storedBooks, wishList } = useContext(BookContext)
  console.log(storedBooks, wishList, 'read and wish')
  return (
    <div className='container mx-auto py-6'>

      <Tabs>
        <TabList className='text-lg flex gap-5'>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadBooks></ListedReadBooks>
        </TabPanel>
        <TabPanel>
          <ListedWishlistBooks></ListedWishlistBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;