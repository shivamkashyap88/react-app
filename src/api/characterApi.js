
export async function getAllCharacters() {
    return await fetch('https://rickandmortyapi.com/api/character/')
    .then((results)=> results.json())
    .then((data)=> data.results);
}