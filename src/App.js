import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import Filter from './components/filter/Filter';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './mappings/mapping-app';
import Card from './components/card/Card';
import SelectedFilter from './components/selectedFilter/SelectedFilter';
import SearchByName from './components/searchByName/SearchByName';
import SortById from './components/sortById/sortById';

function App({ characters, filters, init }) {
  const [filteredCharacter, setfilteredCharacter] = useState([]);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setfilteredCharacter(characters);
    Object.keys(filters).map((key) => {
      if (filters[key].length) {
        let filterArray = [];
        characters.map((character) => {
          switch (key) {
            case 'gender':
              if (filters[key].indexOf(character.gender) !== -1) {
                filterArray.push(character);
              }
              break;
            case 'species':
              if (filters[key].indexOf(character.species) !== -1) {
                filterArray.push(character);
              }
              break;
            case 'origin':
              if (filters[key].indexOf(character.origin.name) !== -1) {
                filterArray.push(character);
              }
              break;
          }
        });
        setfilteredCharacter(filterArray);
      }
    });
  }, [filters, characters])
  return (
    <div className="App">
      <div className="filter">
        <Filter />
      </div>
      <div className="parent-card">
        <SelectedFilter />
        <div className="search-name">
          <SearchByName />
          <SortById />
        </div>
        <div className="card-flex">
          {filteredCharacter.map(
            (result) => {
              return (
                <div key={result.id} className="card-width">
                  <Card character={result} />
                </div>)
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
