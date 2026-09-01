import React from 'react';
import ProductListing from './ProductListing';

const NewArrivals = () => {
  return (
    <ProductListing
      filter="newArrival"
      title="New Arrivals Collection"
    />
  );
};

export default NewArrivals;
