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
      <div>
        <input
          type="text"
          id="search"
          placeholder="Type country"
          value={text}
          onChange={textChange}
        />
        <input type="button" value="find" onClick={filterData} />
      </div>
      <div>
        <ul>
          {filter === false
            ? countries.map((contry) => (
              <ListItem
                key={contry.name}
                contry={contry}
                goDetail={goDetail}
              />
            ))
            : countryFilter.map((contry) => (
              <ListItem
                key={contry.name}
                contry={contry}
                goDetail={goDetail}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default CountryList;
