import './card.scss';
import { CharacterDescription } from './CharacterDescription';

function Card({ character }) {
    const { type, name, id, status, species, gender, image } = character;
    return (
        <div className="card">
            <div className="image-card">
                <img src={image} alt={type}></img>
                <div className="character-info">
                    <div className="character-title">
                        <h5>{name}</h5>
                        <p>id: {id}</p>
                    </div>
                </div>
            </div>
            <CharacterDescription
                status={status}
                species={species}
                gender={gender}
                originName={character.origin.name}
                locationName={character.location.name}
            />
        </div>
    );
}
export default Card;