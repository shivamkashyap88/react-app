import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToPropsFilter, mapStateToProps } from "../../mappings/mapping-app";

function Origin({ characters, filters, changeFilter, removeFromFilter }) {
    const [characterArray, setUniqueCharacter] = useState([]);
    function handleEvent(val, event) {
        if (event.target.checked) {
            changeFilter({ 'origin': val });
        } else {
            removeFromFilter({ 'origin': val });
        }
    }
    useEffect(() => {
        if (characters && characters.length) {
            characters.map((character) => {
                if (characterArray.indexOf(character.origin.name) === -1) {
                    setUniqueCharacter([...characterArray, character.origin.name])
                }
            });
        }
    }, [characters, characterArray])
    return (
        <div className="filter-flex">
            <h3>Origin</h3>
            <div className="filter-content">
                {characterArray.map((character,index) => {
                    return (
                        <div key={index}>
                            <input type="checkbox" id={character} checked={filters['origin'].indexOf(character) !== -1} onChange={handleEvent.bind(this, character)} name={character} value={character} />
                            <label htmlFor={character}>{character}</label><br />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToPropsFilter)(Origin)