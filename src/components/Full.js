import { useEffect, useState } from 'react';
import './CharacterList.css'

export default function Full() {
    const API_URL = 'https://swapi.dev/api';
    const [page, setPage] = useState(1)
    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/people/?page=${page}`)
            .then(response => response.json())
            .then(data => setCharacterList(data.results))
    }, [page]);

    const nextPage = () => page >= 1 && page < 9 ? setPage(page + 1) : setPage(page);
    const previousPage = () => page > 1 && page <= 9 ? setPage(page - 1) : setPage(page);


    function showDetailsToggle(event) {
        event.target.childNodes[1].style.display === 'none' ?
            event.target.childNodes[1].style.display = 'flex'
            :
            event.target.childNodes[1].style.display = 'none';
    }

    return (
        <section className="main">
            <ul className="character-list">
                {characterList.map(character => {
                    return <li onClick={(event) => showDetailsToggle(event)} className="character-list__item" key={character.name}>
                        {character.name}
                        <ul style={{ display: "none" }} id={character.name} className="character-list__item-details">
                            {character.height === 'n/a' ? '' : <li>Height: {character.height}cm</li>}
                            {character.hair_color === 'n/a' ? '' : <li>Hair color: {character.hair_color}</li>}
                            {character.gender === 'n/a' ? '' : <li>Gender: {character.gender}</li>}
                        </ul>
                    </li>
                })}
            </ul>


            <div className="pagination">
                <button onClick={() => previousPage()} className="previous">Previous</button>
                <button onClick={() => nextPage()} className="next">Next</button>
            </div>
        </section >
    )
}
