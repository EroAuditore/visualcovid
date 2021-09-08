import React from 'react';
import { useSelector } from 'react-redux';

const GlobalCard = () => {
  const { confirmed, deaths, lastUpdate } = useSelector(
    (state) => state.covidReducer.worldData,
  );
  if (!confirmed) return <></>;
  return (
    <>
      <div>GlobalCard</div>
      <div>
        <p>{`Confirmed: ${confirmed.value}`}</p>
        <p>{`Confirmed: ${deaths.value}`}</p>
        <p>{`lastUpdate: ${lastUpdate}`}</p>
      </div>
    </>
  );
};

export default GlobalCard;
