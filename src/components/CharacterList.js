import { useEffect, useState } from 'react';
import './CharacterList.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { IconContext } from 'react-icons';

export default function Full() {
    const API_URL = 'https://swapi.dev/api';
    const [page, setPage] = useState(1)
    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/people/?page=${page}`)
            .then(response => response.json())
            .then(data => setCharacterList(data.results))
            .catch(error => console.log(`Ha habido un error de conexión: ${error.message}`))
    }, [page]);

    const nextPage = () => page >= 1 && page < 9 ? setPage(page + 1) : null;
    const previousPage = () => page > 1 && page <= 9 ? setPage(page - 1) : null;

    function showDetailsToggle(event) {
        event.target.childNodes[1].style.display === 'none' ?
            event.target.childNodes[1].style.display = 'block' :
            event.target.childNodes[1].style.display = 'none';
    }

    function orderByName() {
        setCharacterList([...characterList].sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1
            return 0
        }));
    }

    function orderByHeight() {
        setCharacterList([...characterList].sort(function (a, b) {
            return a.height - b.height;
        }));
    }

    return (
        <section className="main">
            <div className="order">
                <button onClick={() => orderByName()} className="order-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> Order by name</button>
                <button onClick={() => orderByHeight()} className="order-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>Order by height</button>
            </div>
            <ul className="character-list">
                {characterList.map(character => {
                    return <li onClick={(event) => showDetailsToggle(event)} className="character-list__item" key={character.name}>{character.name}
                        <ul style={{ display: "none" }} id={character.name} className="character-list__item-details">
                            {character.height === 'n/a' ? '' : <li>Height: {character.height}cm</li>}
                            {character.hair_color === 'n/a' ? '' : <li>Hair color: {character.hair_color}</li>}
                            {character.gender === 'n/a' ? '' : <li>Gender: {character.gender}</li>}
                        </ul>
                    </li>
                })}
            </ul>

            <div className="pagination">
                <IconContext.Provider value={{ className: "button-icon" }}>
                    {page > 1 ? <button onClick={() => previousPage()}><FiArrowLeft /> Previous page</button> : ''}
                    {page < 9 ? <button onClick={() => nextPage()}>Next page <FiArrowRight /></button> : ''}
                </IconContext.Provider>
            </div>
        </section >
    )
}
