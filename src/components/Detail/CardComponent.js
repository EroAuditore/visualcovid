import React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({ country }) => {
  const { confirmed, deaths, lastUpdate } = country;
  if (!confirmed) return <></>;

  return (
    <>
      <div>
        card
        <span>{confirmed.value}</span>
        <span>{deaths.value}</span>
        <span>{new Date(lastUpdate).toDateString()}</span>
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
