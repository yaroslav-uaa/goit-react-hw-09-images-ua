import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('Enter what you are looking');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const handleValueChange = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleValueChange}
          />
        </form>
      </header>
    </>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
