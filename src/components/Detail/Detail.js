import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const country = useSelector((state) => state.covidReducer.country);
  console.log(country);
  return (
    <>
      <h2>Details</h2>
    </>
  );
};

export default Detail;
