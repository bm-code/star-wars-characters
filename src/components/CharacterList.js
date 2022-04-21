import './CharacterList.css'
import { getData } from '../services/api';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

export default function CharacterList() {

    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getData(page).then(data => setCharacters((data.results)))
    }, [page]);

    function showDetailsToggle(e) {
        e.target.childNodes[1].style.display === 'none' ?
            e.target.childNodes[1].style.display = 'block' : e.target.childNodes[1].style.display = 'none';
    }

    return (
        <>
            <ul className="character-list">
                {
                    characters.map(character => {
                        return <li onClick={(e) => showDetailsToggle(e)} className="character-list__item" key={character.name}>{character.name}
                            <ul style={{ display: "none" }} id={character.name} className="character-list__item-details">
                                {character.height === 'n/a' ? '' : <li>Height: {character.height}cm</li>}
                                {character.hair_color === 'n/a' ? '' : <li>Hair color: {character.hair_color}</li>}
                                {character.gender === 'n/a' ? '' : <li>Gender: {character.gender}</li>}
                            </ul>
                        </li>
                    })
                }
            </ul>
            <Pagination page={page} setPage={setPage} />
        </>
    )
}