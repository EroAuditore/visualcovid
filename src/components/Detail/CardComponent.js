import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import logo from '../Home/globe-world-icon.png';

const CardComponent = ({ country }) => {
  const { confirmed, deaths, lastUpdate } = country;
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
          <h6>{new Date(lastUpdate).toDateString()}</h6>
        </div>
      </div>
    </>
  );
};

CardComponent.propTypes = {
  country: PropTypes.shape({
    confirmed: PropTypes.instanceOf(Object).isRequired,
    deaths: PropTypes.isRequired,
    lastUpdate: PropTypes.isRequired,
  }).isRequired,
};

export default CardComponent;
