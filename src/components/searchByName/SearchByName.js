import { connect } from "react-redux";

function SearchByName() {
    return (
        <div>
            <input type="text" name="name"/>
            <button>Search</button>
        </div>
    )
}

export default connect(null,null)(SearchByName)