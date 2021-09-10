import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchDetail } from '../../redux/data/covid';
import ListItem from './ListItem';

const CountryList = () => {
  const { countries } = useSelector((state) => state.covidReducer.countries);
  const [filter, setFilter] = useState(false);
  const [text, setText] = useState('');
  const [countryFilter, setCountryFilter] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const filterData = () => {
    setFilter(!filter);
    const query = text.toLowerCase();
    const filterContry = countries.filter(
      (item) => item.name.toLowerCase().indexOf(query) >= 0,
    );
    setCountryFilter(filterContry);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const goDetail = (country) => {
    dispatch(fetchDetail(country));
    history.push('/detail');
  };

  if (!countries) return <></>;

  return (
    <>
      <div className="div-serch">
        <form>
          <input
            type="text"
            id="search"
            placeholder="Type country"
            value={text}
            onChange={textChange}
            className="text-search"
          />
          <button type="button" className="btn" onClick={filterData}>
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      <div className="country-container">
        <ul className="country-list">
          {filter === false
            ? countries.map((contry, i) => (
              <ListItem
                key={contry.name}
                contry={contry}
                goDetail={goDetail}
                index={i}
              />
            ))
            : countryFilter.map((contry, i) => (
              <ListItem
                key={contry.name}
                contry={contry}
                goDetail={goDetail}
                index={i}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default CountryList;
