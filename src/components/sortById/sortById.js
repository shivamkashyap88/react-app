import { connect } from "react-redux";

function SortById() {
    return (
        <select value="">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    )
}

export default connect(null, null)(SortById);