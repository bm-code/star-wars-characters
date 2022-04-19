import { useEffect, useState } from 'react';
import * as API from '../services/characters';
import './CharacterList.css'

export default function CharacterList() {

    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        API.getCharacters()
            .then(data => setCharacterList(data.results))
    }, []);

    const [details, setDetails] = useState(true)

    return (
        <section className="main">
            <ul className="character-list">
                {
                    characterList.map(character => {
                        return <li onClick={() => setDetails(!details)}
                            className="character-list__item"
                            key={`${character.name}-${character.birth_year}`}>
                            {character.name}

                            {details ?
                                <ul className="character-list__item-details">
                                    {character.height === 'n/a' ? '' : <li>Height: {character.height}cm</li>}
                                    {character.hair_color === 'n/a' ? '' : <li>Hair color: {character.hair_color}</li>}
                                    {character.gender === 'n/a' ? '' : <li>Gender: {character.gender}</li>}
                                </ul> : ''
                            }
                        </li>
                    })
                }
            </ul>


            <div className="pagination">
                <button className="previous">Previous</button>
                <button className="next">Next</button>
            </div>
        </section>
    )
}
