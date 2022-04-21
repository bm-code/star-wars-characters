import { getData } from '../services/api';
import { useEffect, useState } from 'react';
import Ordernation from './Ordernation';
import CharacterList from './CharacterList';

export default function AllCharacters() {

    const [chPage1, setChPage1] = useState([]);
    const [chPage2, setChPage2] = useState([]);
    const [chPage3, setChPage3] = useState([]);
    const [chPage4, setChPage4] = useState([]);
    const [chPage5, setChPage5] = useState([]);
    const [chPage6, setChPage6] = useState([]);
    const [chPage7, setChPage7] = useState([]);
    const [chPage8, setChPage8] = useState([]);
    const [chPage9, setChPage9] = useState([]);

    useEffect(() => {
        getData(1).then(data => setChPage1(data.results))
        getData(2).then(data => setChPage2(data.results))
        getData(3).then(data => setChPage3(data.results))
        getData(4).then(data => setChPage4(data.results))
        getData(5).then(data => setChPage5(data.results))
        getData(6).then(data => setChPage6(data.results))
        getData(7).then(data => setChPage7(data.results))
        getData(8).then(data => setChPage8(data.results))
        getData(9).then(data => setChPage9(data.results))
    }, []);

    const allCharacters = [].concat(chPage1, chPage2, chPage3, chPage4, chPage5, chPage6, chPage7, chPage8, chPage9);

    function showDetailsToggle(e) {
        e.target.childNodes[1].style.display === 'none' ?
            e.target.childNodes[1].style.display = 'block' : e.target.childNodes[1].style.display = 'none';
    }

    const [orderType, setOrderType] = useState(null);

    orderType === 1 ?
        allCharacters.sort(function (a, b) {
            if (a.height === 'unknown') return 1
            return a.height - b.height;
        }) :
        allCharacters.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1
            return 0
        })

    return (
        <>
            <Ordernation orderType={orderType} setOrderType={setOrderType} />
            {
                orderType === null ?
                    <CharacterList /> :
                    <ul className="character-list">
                        {
                            allCharacters.map(character => {
                                return <li onClick={(e) => showDetailsToggle(e)} className="character-list__item" key={character.name}>{character.name}
                                    <ul style={{ display: "none" }} id={character.name} className="character-list__item-details">
                                        {character.height === 'unknown' ? '' : <li>Height: {character.height}cm</li>}
                                        {character.hair_color === 'n/a' ? '' : <li>Hair color: {character.hair_color}</li>}
                                        {character.gender === 'n/a' ? '' : <li>Gender: {character.gender}</li>}
                                    </ul>
                                </li>
                            })
                        }
                    </ul>

            }
        </>
    )
}