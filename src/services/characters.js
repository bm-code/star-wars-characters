const API_URL = 'https://swapi.dev/api';
export let page = 1;


export async function getCharacters() {
    try {
        const response = await fetch(`${API_URL}/people/?page=${page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}