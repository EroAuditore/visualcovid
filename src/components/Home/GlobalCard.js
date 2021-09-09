import React from 'react';
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import logo from './globe-world-icon.png';

const GlobalCard = () => {
  const { confirmed, deaths, lastUpdate } = useSelector(
    (state) => state.covidReducer.worldData,
  );
  if (!confirmed) return <></>;
  return (
    <>
      <div className="Global-card">
        <div className="logoCard">
          <img src={logo} alt="Logo" className="world-logo" />
        </div>
        <div className="info-card">
          <h4>Infected:</h4>
          <h6>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.75}
              separator=","
            />
          </h6>
          <h4>Deaths:</h4>
          <h6>
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.75}
              separator=","
            />
          </h6>
          <h4>lastUpdate:</h4>
          <h6>
            {new Date(lastUpdate).toDateString()}
            `
          </h6>
        </div>
      </div>
    </>
  );
};

export default GlobalCard;
