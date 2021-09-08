import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ contry, goDetail }) => (
  <>
    <ul key={contry.name}>
      <span>{contry.name}</span>
      <input type="button" value="Go" onClick={() => goDetail(contry.name)} />
    </ul>
  </>
);

ListItem.propTypes = {
  contry: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  goDetail: PropTypes.func.isRequired,
};

export default ListItem;
