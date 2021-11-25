import { useState } from "react";
import { connect } from "react-redux";

function SearchByName({ serchByName }) {
    const [name, setName] = useState('');
    const handleClick = () => {
        serchByName(name);
    }
    return (
        <div>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => handleClick()}>Search</button>
        </div>
    )
}

export default connect(null, null)(SearchByName)