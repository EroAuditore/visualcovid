import React from 'react';
import { useSelector } from 'react-redux';
import CardComponent from './CardComponent';

const Detail = () => {
  const country = useSelector((state) => state.covidReducer.country);
  const countryName = useSelector((state) => state.covidReducer.countryName);

  if (!country) return <></>;
  return (
    <>
      <h2>{countryName}</h2>
      <CardComponent country={country} />
    </>
  );
};

export default Detail;
