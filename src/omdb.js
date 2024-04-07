// src/omdb.js
const axios = require('axios');

class OmdbApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async searchMovies(title) {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${title}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data from OMDb API:', error);
            throw error;
        }
    }

    async searchAdvanced(title, year, type, plot = 'short') {
        const url = `http://www.omdbapi.com/?apikey=${this.apiKey}&s=${title}&y=${year}&type=${type}&plot=${plot}`;
        const response = await axios.get(url);
        return response.data;
    }

    async searchMoviesByActor(actorName) {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=&type=movie`);
            if (response.data.Search) {
                return response.data.Search.filter(movie => movie.Actors && movie.Actors.toLowerCase().includes(actorName.toLowerCase()));
            }
            return [];
        } catch (error) {
            console.error('Error searching movies by actor:', error);
            throw error;
        }
    }

    async getMovieByImdbId(imdbId) {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${imdbId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching movie details by IMDb ID:', error);
            throw error;
        }
    }

    async getMultipleMovies(imdbIds) {
        return Promise.all(imdbIds.map(id => this.getMovieByImdbId(id)));
    }
}

module.exports = OmdbApi;
