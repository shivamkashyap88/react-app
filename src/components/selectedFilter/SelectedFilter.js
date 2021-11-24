import { connect } from 'react-redux';
import { mapDispatchToPropsFilter, mapStateToPropsFilter } from '../../mappings/mapping-app';
import './selectedFilter.scss';
function SelectedFilter({ filters, removeFromFilter }) {
    const handleEvent = (key, val) => {
        let obj = {};
        obj[key] = val;
        removeFromFilter(obj);
    }
    return (
        <div>
            <h2>Selected Filters</h2>
            <div className="selected-filter-list">
                {
                    Object.keys(filters).map((key) => {
                        return filters[key].map((val) => {
                            return (
                                <span>{val}&nbsp;<em onClick={() => handleEvent(key, val)}>&#x2717;</em></span>
                            )
                        })
                    })
                }
            </div>
        </div>
    )
}

export default connect(mapStateToPropsFilter, mapDispatchToPropsFilter)(SelectedFilter);