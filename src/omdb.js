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
}

module.exports = OmdbApi;
