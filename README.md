## Installation

Run `npm install omdb-api-node` to install the package.

## Usage

To use this package, you'll need to obtain an API key from [OMDB](http://www.omdbapi.com/).

Here's how you can use the package with your API key:

```javascript
const OmdbApi = require('omdb-api-node');
const omdb = new OmdbApi('your_omdb_api_key');

async function search() {
    try {
        const results = await omdb.searchMovies('The Matrix');
        console.log(results);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function searchAdvanced() {
    try {
        const results = await omdb.searchAdvanced(title, year, type, plot = 'short');
        console.log(results);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function searchMoviesByActor() {
    try {
        const results = await omdb.searchMoviesByActor('Keanu Reeves');
        console.log(results);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function getMovieByImdbId() {
    try {
        const results = await omdb.getMovieByImdbId(imdbId);
        console.log(results);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function getMultipleMovies() {
    try {
        const results = await omdb.getMultipleMovies(imdbIds);
        console.log(results);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

search();
