import Gender from "./Gender";
import Origin from "./Origin";
import Species from "./Species";
import './filter.scss';

export default function Filter () {
    return (
        <>
        <h2>Filters</h2>
        <Species></Species>
        <Gender></Gender>
        <Origin></Origin>
        </>
    );
}