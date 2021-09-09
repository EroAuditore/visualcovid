import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardComponent from './CardComponent';
import ChartD from './ChartD';

const Detail = () => {
  const country = useSelector((state) => state.covidReducer.country);
  const countryName = useSelector((state) => state.covidReducer.countryName);
  const history = useHistory();
  const historyBack = () => {
    history.goBack();
  };

  if (!country) return <></>;
  return (
    <>
      <section className="header">
        <div className="detail-header">
          <button type="button" className="btn-back" onClick={historyBack}>
            <i className="fa fa-arrow-left" />
          </button>
          <h2>{countryName}</h2>
        </div>
        <CardComponent country={country} />
      </section>
      <section className="chart-section">
        <ChartD country={country} />
      </section>
    </>
  );
};

export default Detail;
