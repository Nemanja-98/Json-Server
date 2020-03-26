const URL_FILM="https://my-json-server.typicode.com/Nemanja-98/Json-Server/film";
const URL_GLUMAC="https://my-json-server.typicode.com/Nemanja-98/Json-Server/glumac";

export async function getFilmove(){
    const pom = await fetch(URL_FILM).json();
    return pom
    /*
    return pom.map((el) => {
        return {
            naslov: el.naslov,
            reziser: el.reziser,
            imdb_ocena: el.imdb_ocena,
            glumci: el.glumci
        }
    })
    */
}

export async function getGlumac(id){
    const pom= await fetch(`${URL_GLUMAC}/${id}`).json();
    return pom;
}

export async function getFilm(id){
    const pom = await fetch(URL_FILM+'/' + id).json();
    return  pom;
}