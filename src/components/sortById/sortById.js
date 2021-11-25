import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../mappings/mapping-app";

function SortById({ filteredArray, addFilteredCharacter,changeFilter }) {
    const [sortID, setSortID] = useState('');
    useEffect(() => {
        const duplicatFilter = filteredArray.sort(
            (a, b) => {
                
                if (sortID === 'desc') {
                    return b.id - a.id;
                } else {
                    return a.id - b.id;
                }

            }
        );
        addFilteredCharacter(duplicatFilter);
    }, [filteredArray,sortID]);
    const handleSelectEvent = (e) => {
        setSortID(e.target.value);
        changeFilter({sort: e.target.value});
    }
    return (
        <select value={sortID} onChange={(event) => handleSelectEvent(event)}>
            <option value="">Sort By Id</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SortById);