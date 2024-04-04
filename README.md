## Installation

Run `npm install your-package-name` to install the package.

## Usage

To use this package, you'll need to obtain an API key from [OMDB](http://www.omdbapi.com/).

Here's how you can use the package with your API key:

```javascript
const OmdbApi = require('your-package-name');
const omdb = new OmdbApi('your_omdb_api_key');

async function search() {
    try {
        const results = await omdb.searchMovies('The Matrix');
        console.log(results);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

search();
