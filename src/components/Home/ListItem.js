import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ contry, goDetail, index }) => {
  const styleRow = index % 2 === 0 ? 'bg-primary' : 'bg-secundary';
  return (
    <>
      <li key={contry.name} className={styleRow}>
        <span className="country-name">{contry.name}</span>
        <button
          type="button"
          className="btn-go"
          onClick={() => goDetail(contry.name)}
        >
          <i className="fa fa-arrow-circle-o-right" />
        </button>
      </li>
    </>
  );
};

ListItem.propTypes = {
  contry: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  goDetail: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ListItem;
