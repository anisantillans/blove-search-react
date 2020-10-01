import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className="main">
    <div className="main__search">
      <p className="main__search__title">You can be a hero!</p>
      <p className="main__search__subtitle">DONATE BLOOD</p>
      <p className="main__search__question">What`s your blood type?</p>
      <input className="inputSearch" type="text" placeholder="Search..." />
    </div>
  </section>
);

export default Search;
