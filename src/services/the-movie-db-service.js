export default class TheMovieDBService {
  _apiBase = "https://api.themoviedb.org/3";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }

    return await res.json();
  }

  async getMoviesByQuery(query) {
    const res = await this.getResource(
      `/search/movie?api_key=95cd4b94ac467892d15da4ac83562933&language=en-US&query=${query}&page=1&include_adult=false`
    );

    return res.results;
  }

  async getGenres() {
    const res = await this.getResource(
      "/genre/movie/list?api_key=95cd4b94ac467892d15da4ac83562933&language=en-US"
    );

    return res.genres;
  }
}
