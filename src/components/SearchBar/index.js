import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { SearchContainer } from './styles';

export default function SearchBar(props) {
  const history = useHistory();

  function search(event) {
    event.preventDefault();
    const query = document.querySelector('input[name=search]');
    localStorage.setItem('busca', query.value);
    history.push('/detail');
  }

  return (
    <SearchContainer
      marginBottom={props.marginBottom}
      right={props.right}
      top={props.top}
    >
      <form onSubmit={search}>
        <input type="text" placeholder="Insira aqui o nome da cidade" name="search" />
        <FaSearch className="icon" onClick={search} />
      </form>
      <hr />
    </SearchContainer>
  );
}
