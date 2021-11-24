import './characterDescription.scss';

export function CharacterDescription(props) {
    return (
        <div className="card-description">
            <div className="card-item">
                <span className="character-key">STATUS</span>
                <span className="character-value">{props.status}</span>
            </div>
            <div className="card-item">
                <span className="character-key">SPECIES</span>
                <span className="character-value">{props.species}</span>
            </div>
            <div className="card-item">
                <span className="character-key">GENDER</span>
                <span className="character-value">{props.gender}</span>
            </div>
            <div className="card-item">
                <span className="character-key">ORIGIN</span>
                <span className="character-value">{props.originName}</span>
            </div>
            <div className="card-item">
                <span className="character-key">LAST LOCATION</span>
                <span className="character-value">{props.locationName}</span>
            </div>
        </div>
    );
}