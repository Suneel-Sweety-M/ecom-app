import React from 'react'
import Home from './Home';
import FlashDeals from '../components/FlashDeals';
import TopCate from './TopCate';
import NewArrivals from '../components/NewArrivals';
import Discount from '../components/Discount';
import Shop from './Shop';
import Announcement from '../components/Announcement';
import Wrapper from './Wrapper';

const Pages = ({productItems, addToCart, shopItems}) => {
  return (
    <>
    <Home />
    <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Announcement />
      <Wrapper /> 
    </>
  )
}

export default Pages;