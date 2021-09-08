import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CountryList = () => {
  const { countries } = useSelector((state) => state.covidReducer.countries);
  const [filter, setFilter] = useState(false);
  const [text, setText] = useState('');
  const [countryFilter, setCountryFilter] = useState([]);

  const filterData = () => {
    setFilter(!filter);
    setCountryFilter([{ name: 'Mexico' }]);
  };

  const textChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
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
              <ul key={contry.name}>{contry.name}</ul>
            ))
            : countryFilter.map((contry) => (
              <ul key={contry.name}>{contry.name}</ul>
            ))}
        </ul>
      </div>
    </>
  );
};

export default CountryList;
