const API_URL = 'https://swapi.dev/api/people';

export const getData = async (index) => {
    let params = `${API_URL}/?page=${index}`;
    const response = await fetch(params);
    return await response.json();
}