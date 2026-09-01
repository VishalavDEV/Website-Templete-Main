import React from 'react';
import ProductListing from './ProductListing';

const Trending = () => {
  return (
    <ProductListing
      filter="trending"
      title="Trending Fashion Items"
    />
  );
};

export default Trending;
