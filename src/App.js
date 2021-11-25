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

function App({ characters, filters, filteredArray, init, addFilteredCharacter }) {
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    addFilteredCharacter(characters);
    Object.keys(filters).map((key) => {
      if (typeof filters[key] === 'object' && filters[key].length) {
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
        console.log('1',filterArray)
        if (filters['sort']) {
          const sortedCharacter = filterArray.sort(
            (a, b) => {
              if (filters['sort'] === 'desc') {
                return b.id - a.id;
              } else {
                return a.id - b.id;
              }

            }
          );
          addFilteredCharacter(sortedCharacter);
        } else {
          addFilteredCharacter(filterArray);
        }
      }
    });
  }, [filters, characters]);

  const getNameCharacter = (val) => {
    const namedCharacter = characters.filter((character) =>  character.name.toLowerCase().includes(val));
    addFilteredCharacter(namedCharacter);
  }

  return (
    <div className="App">
      <div className="filter">
        <Filter />
      </div>
      <div className="parent-card">
        <SelectedFilter />
        <div className="search-name">
          <SearchByName serchByName={getNameCharacter} />
          <SortById />
        </div>
        <div className="card-flex">
          {filteredArray.map(
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
