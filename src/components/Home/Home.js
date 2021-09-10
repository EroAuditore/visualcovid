import React from 'react';
import GlobalCard from './GlobalCard';
import CountryList from './CountryList';

const Home = () => (
  <>
    <section className="header">
      <GlobalCard />
    </section>
    <section className="list-section">
      <h4> Select contry</h4>
      <CountryList />
    </section>
  </>
);

export default Home;
