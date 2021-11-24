import { connect } from "react-redux";
import { mapDispatchToPropsFilter, mapStateToPropsFilter } from "../../mappings/mapping-app";

function Species({ filters, changeFilter, removeFromFilter }) {
    function handleEvent(val, event) {
        if (event.target.checked) {
            changeFilter({ 'species': val });
        } else {
            removeFromFilter({ 'species': val });
        }
    }

    return (
        <div className="filter-flex">
            <h3>Species</h3>
            <div className="filter-content">
                <input type="checkbox" checked={filters['species'].indexOf('Human') !== -1} onChange={handleEvent.bind(this, 'Human')} id="human" name="human" value="human" />
                <label htmlFor="human">Human</label><br />
                <input type="checkbox" checked={filters['species'].indexOf('Alien') !== -1} onChange={handleEvent.bind(this, 'Alien')} id="alien" name="alien" value="alien" />
                <label htmlFor="alien">Alien</label>
            </div>
        </div>
    );
}

export default connect(mapStateToPropsFilter, mapDispatchToPropsFilter)(Species)