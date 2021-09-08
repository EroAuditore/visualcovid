import React from 'react';
import GlobalCard from './GlobalCard';
import CountryList from './CountryList';

const Home = () => (
  <>
    <div className="container">
      <section>
        <GlobalCard />
      </section>
      <section>
        <h2> countries list</h2>
        <CountryList />
      </section>
    </div>
  </>
);

export default Home;
