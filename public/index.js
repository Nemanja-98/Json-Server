import {getGlumac,getFilmove,getFilm} from './promises';
export function drawMovies(){
  
    

    const movies = getFilmove().then(movies =>{
      const host = document.getElementById('moviesMain');
  
      const header = document.createElement("h1");
      header.innerHTML = "Movies";
      host.appendChild(header);
  
      movies.map(el => {
        const movie = document.createElement('div');
        movie.className = "movies";
        movie.id = el.id;
        movie.addEventListener("click",()=> {
          writeDetails(movie.id);
        })
        movie.innerHTML = el.naziv+" reziser:" + el.reziser+" "+el.imdb_ocena;
        host.appendChild(movie);
      })
  
      const moreInfo = document.createElement("p");
      moreInfo.innerHTML = "Press movie title for more info";
      host.appendChild(moreInfo);
  
    }).catch((error) => alert(error));
  
  }
  
  function writeDetails(id){
  
  const removeEl = document.querySelector("ul");
     if (removeEl != null){
        removeEl.remove();
     } 
  
    const movie = getFilm(id).then(movie => {
      const host = document.getElementById('movieDetails');
      const details = document.createElement('ul');
      host.appendChild(details);
  
      const name = document.createElement('li');
      name.innerHTML ="Title - " + movie.naziv;
      details.appendChild(name);
  
      const year = document.createElement('li');
      year.innerHTML ="Release year - " + movie.reziser + ".";
      details.appendChild(year); 
      
      const rating = document.createElement('li');
      rating.innerHTML ="IMDb rating - " + movie.imdb_ocena;
      details.appendChild(rating);
  
      const actors = document.createElement("li");
      actors.innerHTML = "Actors - ";
      actors.id = "actors";
      details.appendChild(actors);
  
  
      Promise.all( movie.actorId.map(el => {
        getGlumac(el).then(actor => {
            const actorsLi = document.getElementById("actors");
            actorsLi.innerHTML += actor.ime + " ";
        })
      })
      )
  
    }).catch((err) => alert(err));
    
  }