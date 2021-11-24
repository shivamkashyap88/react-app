import { connect } from "react-redux";
import { mapDispatchToPropsFilter, mapStateToPropsFilter } from "../../mappings/mapping-app";

function Gender({ filters, changeFilter, removeFromFilter }) {
    function handleEvent(val, event) {
        if (event.target.checked) {
            changeFilter({ 'gender': val });
        } else {
            removeFromFilter({ 'gender': val })
        }
    }
    return (
        <div className="filter-flex">
            <h3>Gender</h3>
            <div className="filter-content">
                <input type="checkbox" id="male" checked={filters['gender'].indexOf('Male') !== -1} onChange={(event) => handleEvent('Male', event)} name="male" value="male" />
                <label htmlFor="male">Male</label><br />
                <input type="checkbox" id="female" checked={filters['gender'].indexOf('Female') !== -1} onChange={(event) => handleEvent('Female', event)} name="female" value="female" />
                <label htmlFor="female">Female</label>
            </div>
        </div>
    );
}

export default connect(mapStateToPropsFilter, mapDispatchToPropsFilter)(Gender)