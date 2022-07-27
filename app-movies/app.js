//

//

const movies = require("./peliculas/movies");

//
const DHmovies = {
  listMovies: function () {
    rest = movies.forEach((e, i) => {
      console.log(`${i + 1}-${e.title}`);
    });
    return rest;
  },
  searchMovie: function (parametre) {
    let results = movies.find((el) => el.id === parametre);
    if (results === undefined) {
      results = null;
    }
    return results;
  },
  searchMoviesByGenre: function (parametre) {
    const rest = movies.filter((el) => el.genre === parametre);
    return rest;
  },
  totlaPrice: function () {
    let sumatoria = movies.reduce((acc, el) => acc + el.price, 0);
    return sumatoria;
  },
  changeMovieGenre: function (newGenre, callback) {
    let pelicula = callback;
    console.log(pelicula.genre.replace(pelicula.genre, newGenre));
  },
};

console.log(DHmovies.listMovies());
console.log(DHmovies.searchMovie(1));
console.log(DHmovies.searchMoviesByGenre("Comedia"));
console.log(DHmovies.totlaPrice());
console.log(DHmovies.changeMovieGenre("Acción", DHmovies.searchMovidfe(5)));


